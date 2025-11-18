

// ExportReport.jsx
'use client';

import React, { useState, useMemo, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
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
import { Calendar as CalendarIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format as dateFormat, startOfWeek, endOfWeek, addWeeks } from 'date-fns';
import { toast } from 'sonner';

const ExportReport = ({ yearFilter, monthFilter, weekFilter, dateRange, setOpen, open }) => {
  const [reportType, setReportType] = useState('statistics');
  const [fileFormat, setFileFormat] = useState('pdf');
  const [localYearFilter, setLocalYearFilter] = useState(yearFilter);
  const [localMonthFilter, setLocalMonthFilter] = useState(monthFilter);
  const [localWeekFilter, setLocalWeekFilter] = useState(weekFilter);
  const [localDateRange, setLocalDateRange] = useState(dateRange);

  // Dynamic years: current year and past 10 years
  const currentYear = new Date().getFullYear().toString();
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

  const weeks = useMemo(() => {
    const weekOptions = [{ value: 'all', label: 'All Weeks' }];
    if (localYearFilter !== 'all' && localMonthFilter !== 'all') {
      const year = parseInt(localYearFilter);
      const month = parseInt(localMonthFilter) - 1; // 0-based for date-fns
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
  }, [localYearFilter, localMonthFilter]);

  const resetDateRange = useCallback(() => {
    setLocalDateRange({ from: null, to: null });
  }, []);

  const handleExport = () => {
    // Mock export logic with random success/fail for demonstration
    if (Math.random() < 0.8) { // 80% success rate
      toast.success(`${reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report downloaded as ${fileFormat.toUpperCase()}`);
    } else {
      toast.error(`Failed to download ${reportType} Report as ${fileFormat.toUpperCase()}. Please try again.`);
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Export Report</DialogTitle>
          <DialogDescription>Select report type, period, and download format.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex items-center gap-4">
            <Label className="w-24 text-right">Type</Label>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger className="flex-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="statistics">Statistics Report</SelectItem>
                <SelectItem value="performance">Performance Report</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <Label className="w-24 text-right">Year</Label>
            <Select value={localYearFilter} onValueChange={setLocalYearFilter}>
              <SelectTrigger className="flex-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year === 'all' ? 'All Years' : year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <Label className="w-24 text-right">Month</Label>
            <Select value={localMonthFilter} onValueChange={setLocalMonthFilter}>
              <SelectTrigger className="flex-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {months.map((month) => (
                  <SelectItem key={month.value} value={month.value}>
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <Label className="w-24 text-right">Week</Label>
            <Select value={localWeekFilter} onValueChange={setLocalWeekFilter}>
              <SelectTrigger className="flex-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {weeks.map((week) => (
                  <SelectItem key={week.value} value={week.value}>
                    {week.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <Label className="w-24 text-right">Date Range</Label>
            <div className="relative flex-1">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full justify-start text-left font-normal',
                      !localDateRange.from && 'text-gray-500'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {localDateRange.from && localDateRange.to ? (
                      `${dateFormat(localDateRange.from, 'MMM dd')} - ${dateFormat(localDateRange.to, 'MMM dd, yyyy')}`
                    ) : (
                      'Select Date Range'
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="range"
                    selected={localDateRange}
                    onSelect={setLocalDateRange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {localDateRange.from && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2"
                  onClick={resetDateRange}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Label className="w-24 text-right">Format</Label>
            <Select value={fileFormat} onValueChange={setFileFormat}>
              <SelectTrigger className="flex-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="word">Word</SelectItem>
                <SelectItem value="excel">Excel</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleExport}>Export</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExportReport;