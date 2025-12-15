


// MarketingOverview.jsx
'use client';

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Calendar as CalendarIcon, Filter, AlertCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format as dateFormat, isWithinInterval, parseISO, startOfWeek, endOfWeek, addWeeks } from 'date-fns';
import { toast } from 'sonner';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend,
} from 'chart.js';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { fetchMarketingOverview } from '@/modules/marketing/slices/MarketingOverviewSlice';
import ExportReport from './ExportReport';

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, ArcElement, ChartTooltip, Legend);

// Skeleton Components
const SkeletonCard = () => (
  <Card className="shadow-sm border border-gray-100">
    <div className="p-4">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
      <div className="h-8 bg-gray-200 rounded w-1/2 animate-pulse"></div>
    </div>
  </Card>
);

const SkeletonChart = () => (
  <Card className="shadow-sm border border-gray-100">
    <div className="p-4">
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-4 animate-pulse"></div>
      <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
    </div>
  </Card>
);

const SkeletonCircularProgress = () => (
  <Card className="shadow-sm border border-gray-100">
    <div className="p-4">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
      <div className="h-20 w-20 bg-gray-200 rounded-full mx-auto animate-pulse"></div>
    </div>
  </Card>
);

export default function MarketingOverview() {
  const dispatch = useDispatch();
  const { overviewData, status, error } = useSelector((state) => state.marketingOverview);
  const currentYear = new Date().getFullYear().toString();
  const [yearFilter, setYearFilter] = useState(currentYear);
  const [monthFilter, setMonthFilter] = useState('all');
  const [weekFilter, setWeekFilter] = useState('all');
  const [dateRange, setDateRange] = useState({ from: null, to: null });
  const [openExportDialog, setOpenExportDialog] = useState(false);

  // Configuration
  const years = ['all', ...Array.from({ length: 11 }, (_, i) => (parseInt(currentYear) - 10 + i).toString())];
  const months = [
    { value: 'all', label: 'All Months' },
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  // Generate week options dynamically based on selected year and month
  const weeks = useMemo(() => {
    const weekOptions = [{ value: 'all', label: 'All Weeks' }];
    if (yearFilter !== 'all' && monthFilter !== 'all') {
      const year = parseInt(yearFilter);
      const month = parseInt(monthFilter) - 1;
      const startDate = new Date(year, month, 1);
      let currentWeekStart = startOfWeek(startDate, { weekStartsOn: 1 });
      const endDate = new Date(year, month + 1, 0);

      let weekNumber = 1;
      while (currentWeekStart <= endDate) {
        const weekEnd = endOfWeek(currentWeekStart, { weekStartsOn: 1 });
        weekOptions.push({
          value: weekNumber.toString(),
          label: `Week ${weekNumber} (${dateFormat(currentWeekStart, 'MMM dd')} - ${dateFormat(
            weekEnd <= endDate ? weekEnd : endDate,
            'MMM dd'
          )})`,
        });
        currentWeekStart = addWeeks(currentWeekStart, 1);
        weekNumber++;
      }
    }
    return weekOptions;
  }, [yearFilter, monthFilter]);

  // Check if any filter is active
  const isFilterActive = yearFilter !== currentYear || monthFilter !== 'all' || weekFilter !== 'all' || (dateRange.from && dateRange.to);

  // Clear all filters
  const clearFilters = useCallback(() => {
    setYearFilter(currentYear);
    setMonthFilter('all');
    setWeekFilter('all');
    setDateRange({ from: null, to: null });
  }, [currentYear]);

  // Handle export click
  const handleExportClick = () => {
    if (yearFilter === 'all') {
      toast.error('Please select a particular year to export the report.');
    } else {
      setOpenExportDialog(true);
    }
  };

  // Fetch data on mount
  useEffect(() => {
    dispatch(fetchMarketingOverview()).catch(() => {
      toast.error('Failed to load marketing overview data.');
    });
  }, [dispatch]);

  // Handle API errors
  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error.message || 'Failed to load data'}`);
    }
  }, [error]);

  // Filtered data
  const filteredLeadSources = useMemo(() => {
    if (!overviewData?.leadSources) return [];
    let result = overviewData.leadSources;
    if (yearFilter !== 'all') {
      result = result.filter((item) =>
        item.date ? new Date(item.date).getFullYear().toString() === yearFilter : false
      );
    }
    if (monthFilter !== 'all') {
      result = result.filter((item) =>
        item.date ? new Date(item.date).getMonth() + 1 === parseInt(monthFilter) : false
      );
    }
    if (weekFilter !== 'all' && yearFilter !== 'all' && monthFilter !== 'all') {
      const year = parseInt(yearFilter);
      const month = parseInt(monthFilter) - 1;
      const weekNumber = parseInt(weekFilter);
      const startDate = addWeeks(
        startOfWeek(new Date(year, month, 1), { weekStartsOn: 1 }),
        weekNumber - 1
      );
      const endDate = endOfWeek(startDate, { weekStartsOn: 1 });
      result = result.filter((item) =>
        item.date
          ? isWithinInterval(parseISO(item.date), { start: startDate, end: endDate })
          : false
      );
    }
    if (dateRange.from && dateRange.to) {
      result = result.filter((item) =>
        item.date
          ? isWithinInterval(parseISO(item.date), { start: dateRange.from, end: dateRange.to })
          : false
      );
    }
    return result;
  }, [overviewData, yearFilter, monthFilter, weekFilter, dateRange]);

  const filteredLeadTrend = useMemo(() => {
    if (!overviewData?.leadTrend) return [];
    let result = overviewData.leadTrend;
    if (yearFilter !== 'all') {
      result = result.filter((item) =>
        item.date ? new Date(item.date).getFullYear().toString() === yearFilter : false
      );
    }
    if (monthFilter !== 'all') {
      result = result.filter((item) =>
        item.date ? new Date(item.date).getMonth() + 1 === parseInt(monthFilter) : false
      );
    }
    if (weekFilter !== 'all' && yearFilter !== 'all' && monthFilter !== 'all') {
      const year = parseInt(yearFilter);
      const month = parseInt(monthFilter) - 1;
      const weekNumber = parseInt(weekFilter);
      const startDate = addWeeks(
        startOfWeek(new Date(year, month, 1), { weekStartsOn: 1 }),
        weekNumber - 1
      );
      const endDate = endOfWeek(startDate, { weekStartsOn: 1 });
      result = result.filter((item) =>
        item.date
          ? isWithinInterval(parseISO(item.date), { start: startDate, end: endDate })
          : false
      );
    }
    if (dateRange.from && dateRange.to) {
      result = result.filter((item) =>
        item.date
          ? isWithinInterval(parseISO(item.date), { start: dateRange.from, end: dateRange.to })
          : false
      );
    }
    return result;
  }, [overviewData, yearFilter, monthFilter, weekFilter, dateRange]);

  const filteredStatistics = useMemo(() => {
    if (!overviewData?.statistics) return [];
    const scale = filteredLeadSources.length / (overviewData.leadSources.length || 1);
    return overviewData.statistics.map((stat) => ({
      ...stat,
      value: Math.round(stat.value * scale),
    }));
  }, [overviewData, filteredLeadSources]);

  const filteredKpis = useMemo(() => {
    if (!overviewData?.kpis) return [];
    return overviewData.kpis;
  }, [overviewData]);

  // Chart configurations
  const leadSourceChartData = useMemo(
    () => ({
      labels: filteredLeadSources.map((item) => item.name),
      datasets: [
        {
          data: filteredLeadSources.map((item) => item.value),
          backgroundColor: [
            '#4f46e5',
            '#10b981',
            '#f59e0b',
            '#ef4444',
            '#8b5cf6',
            '#ec4899',
            '#3b82f6',
            '#6b7280',
            '#d97706',
            '#06b6d4',
          ],
          borderColor: ['#ffffff'],
          borderWidth: 2,
        },
      ],
    }),
    [filteredLeadSources]
  );

  const leadTrendChartData = useMemo(
    () => ({
      labels: filteredLeadTrend.map((item) => item.day),
      datasets: [
        {
          label: 'New Leads',
          data: filteredLeadTrend.map((item) => item.leads),
          borderColor: '#4f46e5',
          backgroundColor: '#4f46e5',
          fill: false,
          tension: 0.4,
          pointBackgroundColor: '#4f46e5',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
        },
      ],
    }),
    [filteredLeadTrend]
  );

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#374151',
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        backgroundColor: '#1f2937',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#e5e7eb',
        borderWidth: 1,
      },
    },
  };

  const lineChartOptions = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#374151',
        },
      },
      y: {
        grid: {
          color: '#e5e7eb',
        },
        ticks: {
          color: '#374151',
        },
      },
    },
  };

  // Handlers
  const resetDateRange = useCallback(() => {
    setDateRange({ from: null, to: null });
  }, []);

  // Determine KPI performance scale and color
  const getKpiPerformance = (value) => {
    if (value <= 33) {
      return { label: 'Bad', color: '#ef4444' };
    } else if (value <= 66) {
      return { label: 'Good', color: '#f59e0b' };
    } else {
      return { label: 'Excellent', color: '#10b981' };
    }
  };

  return (
    <Tooltip.Provider>
      <div className="min-h-screen  bg-gray-50">
        <Card className="overflow-hidden shadow-lg border-0 bg-white">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white p-6 sm:p-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold truncate max-w-full">
                  Marketing Overview
                </h2>
                <p className="text-sm text-teal-100 mt-2">
                  Snapshot of your marketing and contact performance
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100" onClick={handleExportClick}>
                  Export Report
                </Button>
                {isFilterActive && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-white hover:bg-gray-100 text-gray-600 border-gray-200 rounded-full h-10 w-10 flex items-center justify-center"
                    onClick={clearFilters}
                    title="Clear Filters"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
          <ExportReport
            yearFilter={yearFilter}
            monthFilter={monthFilter}
            weekFilter={weekFilter}
            dateRange={dateRange}
            open={openExportDialog}
            setOpen={setOpenExportDialog}
          />
          <CardContent className="p-4 sm:p-6 md:p-8">
            {status === 'loading' ? (
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                  {[...Array(4)].map((_, idx) => (
                    <SkeletonCard key={idx} />
                  ))}
                </div>
                <div className="space-y-8">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, idx) => (
                      <SkeletonCard key={idx} />
                    ))}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, idx) => (
                      <SkeletonCircularProgress key={idx} />
                    ))}
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <SkeletonChart />
                    <SkeletonChart />
                  </div>
                </div>
              </div>
            ) : status === 'failed' ? (
              <div className="flex flex-col items-center space-y-3 py-16">
                <AlertCircle className="h-12 w-12 text-gray-300" aria-hidden="true" />
                <span className="text-xl font-semibold text-gray-500">
                  Error loading data
                </span>
                <p className="text-gray-400">
                  An error occurred. Please try again later.
                </p>
                <Button
                  className="bg-teal-600 text-white hover:bg-teal-700"
                  onClick={() => dispatch(fetchMarketingOverview())}
                >
                  Retry
                </Button>
              </div>
            ) : (
              <>
                {/* Section 1: Filters */}
                <div className="w-full flex flex-col sm:flex-wrap sm:flex-row gap-3 sm:gap-4 mb-8 p-4 bg-gray-100 rounded-lg shadow-sm items-stretch justify-between">
                  {[
                    {
                      label: 'Filter by Year',
                      icon: <Filter className="h-4 w-4 text-teal-600" />,
                      content: (
                        <Select value={yearFilter} onValueChange={setYearFilter}>
                          <SelectTrigger className="w-full bg-white border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 h-10">
                            <SelectValue placeholder="Select Year" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-gray-300">
                            {years.map((year) => (
                              <SelectItem key={year} value={year}>
                                {year === 'all' ? 'All Years' : year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ),
                    },
                    {
                      label: 'Filter by Month',
                      icon: <Filter className="h-4 w-4 text-teal-600" />,
                      content: (
                        <Select value={monthFilter} onValueChange={setMonthFilter}>
                          <SelectTrigger className="w-full bg-white border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 h-10">
                            <SelectValue placeholder="Select Month" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-gray-300">
                            {months.map((month) => (
                              <SelectItem key={month.value} value={month.value}>
                                {month.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ),
                    },
                    {
                      label: 'Filter by Week',
                      icon: <Filter className="h-4 w-4 text-teal-600" />,
                      content: (
                        <Select value={weekFilter} onValueChange={setWeekFilter} disabled={monthFilter === 'all'}>
                          <SelectTrigger className="w-full bg-white border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 h-10" disabled={monthFilter === 'all'}>
                            <SelectValue placeholder="Select Week" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-gray-300">
                            {weeks.map((week) => (
                              <SelectItem key={week.value} value={week.value}>
                                {week.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ),
                    },
                    {
                      label: 'Date Range',
                      icon: <CalendarIcon className="h-4 w-4 text-teal-600" />,
                      content: (
                        <div className="relative">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  'w-full justify-start text-left font-normal bg-white border-gray-300 hover:bg-gray-50 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 px-3 py-1 h-10',
                                  !dateRange.from && 'text-gray-500'
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4 text-teal-600" />
                                {dateRange.from && dateRange.to ? (
                                  <span className="truncate max-w-[120px] sm:max-w-[150px] md:max-w-[200px]">
                                    {`${dateFormat(dateRange.from, 'MMM dd')} - ${dateFormat(
                                      dateRange.to,
                                      'MMM dd, yyyy'
                                    )}`}
                                  </span>
                                ) : (
                                  <span>Select Date Range</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0 bg-white border-gray-300"
                              align="start"
                            >
                              <Calendar
                                mode="range"
                                selected={dateRange}
                                onSelect={setDateRange}
                                initialFocus
                                className="rounded-md border border-gray-300"
                              />
                            </PopoverContent>
                          </Popover>
                          {dateRange.from && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="absolute right-1 top-1/2 -translate-y-1/2 bg-gray-50 hover:bg-gray-100 text-gray-600 border-gray-200 rounded-full h-6 w-6"
                              onClick={resetDateRange}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      ),
                    },
                  ].map((field, index) => (
                    <div
                      key={index}
                      className="flex flex-col flex-1 min-w-[240px] sm:min-w-[200px] md:min-w-[250px] lg:min-w-[280px] bg-gray-50 rounded-lg p-2 justify-between"
                    >
                      {field.label && (
                        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                          {field.icon}
                          <span>{field.label}</span>
                        </div>
                      )}
                      {field.content}
                    </div>
                  ))}
                </div>

                {/* Section 2: Statistics */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Statistics</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredStatistics.map((stat, idx) => (
                      <Tooltip.Root key={idx}>
                        <Tooltip.Trigger asChild>
                          <Card className="shadow-sm border border-gray-100 hover:shadow-md transition-all bg-white">
                            <div className="p-4">
                              <h4 className="text-xs font-medium text-gray-500">{stat.title}</h4>
                              <p className="text-2xl font-semibold text-gray-900 mt-2">{stat.value}</p>
                            </div>
                          </Card>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            className="bg-gray-700 text-white text-sm rounded-md px-2 py-1 shadow-lg"
                            sideOffset={5}
                          >
                            {stat.title}
                            <Tooltip.Arrow className="fill-gray-700" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    ))}
                  </div>
                </div>

                {/* Section 3: KPIs */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Performance Indicators</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredKpis.map((kpi, idx) => {
                      const performance = getKpiPerformance(kpi.value);
                      return (
                        <Tooltip.Root key={idx}>
                          <Tooltip.Trigger asChild>
                            <Card className="shadow-sm border border-gray-100 hover:shadow-md transition-all bg-white">
                              <div className="p-4 text-center">
                                <h4 className="text-xs font-medium text-gray-500 mb-2">{kpi.title}</h4>
                                <div className="w-20 h-20 mx-auto">
                                  <CircularProgressbar
                                    value={kpi.value}
                                    text={`${kpi.value.toFixed(1)}${kpi.title.includes('Score') ? '' : '%'}`}
                                    styles={buildStyles({
                                      pathColor: performance.color,
                                      textColor: '#374151',
                                      trailColor: '#e5e7eb',
                                      textSize: '16px',
                                    })}
                                  />
                                </div>
                                <p className="text-sm font-medium mt-2" style={{ color: performance.color }}>
                                  {performance.label}
                                </p>
                              </div>
                            </Card>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content
                              className="bg-gray-700 text-white text-sm rounded-md px-2 py-1 shadow-lg"
                              sideOffset={5}
                            >
                              {kpi.title}: {performance.label} ({kpi.value.toFixed(1)}%)
                              <Tooltip.Arrow className="fill-gray-700" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      );
                    })}
                  </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Lead Source Pie Chart */}
                  <Card className="shadow-sm border border-gray-100 bg-white">
                    <div className="p-4">
                      <h3 className="text-base font-semibold text-gray-800">Lead Source Distribution</h3>
                      <div className="h-72 mt-4">
                        <Pie data={leadSourceChartData} options={chartOptions} />
                      </div>
                    </div>
                  </Card>

                  {/* Lead Trend Line Chart */}
                  <Card className="shadow-sm border border-gray-100 bg-white">
                    <div className="p-4">
                      <h3 className="text-base font-semibold text-gray-800">Weekly New Leads Trend</h3>
                      <div className="h-72 mt-4">
                        <Line data={leadTrendChartData} options={lineChartOptions} />
                      </div>
                    </div>
                  </Card>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </Tooltip.Provider>
  );
}


















