


// src/app/(protected)/calendar/page.js
'use client';

import React, { useRef, useState, useEffect, useMemo } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';               // Shadcn UI Calendar
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  CheckSquare,
  Users,
  CalendarDays,
  Menu,
  Heart,
  Flag,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------
// Dummy Events
// ---------------------------------------------------------------------
const dummyEvents = [
  { id: '1', title: 'Team Stand-up', start: '2025-10-31T09:00:00', end: '2025-10-31T09:30:00', type: 'meeting' },
  { id: '2', title: 'Client Demo', start: '2025-10-31T11:00:00', end: '2025-10-31T12:00:00', type: 'meeting' },
  { id: '3', title: 'Design Review', start: '2025-10-31T14:00:00', end: '2025-10-31T15:30:00', type: 'task' },
  { id: '4', title: 'Lunch & Learn', start: '2025-10-31T12:30:00', end: '2025-10-31T13:30:00', type: 'event' },
  { id: '5', title: 'Doctor Checkup', start: '2025-10-31T16:00:00', end: '2025-10-31T16:45:00', type: 'appointment' },
  { id: '6', title: 'Sprint Planning', start: '2025-11-03T10:00:00', end: '2025-11-03T11:30:00', type: 'task' },
  { id: '7', title: 'Alex Birthday', start: '2025-11-05T00:00:00', type: 'birthday' },
  { id: '8', title: 'Diwali Holiday', start: '2025-11-12T00:00:00', type: 'holiday' },
  { id: '9', title: 'Code Review', start: '2025-11-07T15:00:00', end: '2025-11-07T16:00:00', type: 'task' },
  { id: '10', title: 'Team Offsite', start: '2025-11-14T09:00:00', end: '2025-11-14T17:00:00', type: 'event' },
];

// ---------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------
const categories = [
  { id: 'meeting', name: 'Meeting', color: '#3b82f6', icon: Users },
  { id: 'task', name: 'Task', color: '#10b981', icon: CheckSquare },
  { id: 'appointment', name: 'Appointment', color: '#f59e0b', icon: Clock },
  { id: 'event', name: 'Event', color: '#ef4444', icon: CalendarDays },
  { id: 'birthday', name: 'Birthday', color: '#a855f7', icon: Heart },
  { id: 'holiday', name: 'Holiday', color: '#6366f1', icon: Flag },
];

const typeColors = {
  meeting: { bg: '#dbeafe', border: '#3b82f6', text: '#1e40af' },
  task: { bg: '#d1fae5', border: '#10b981', text: '#065f46' },
  appointment: { bg: '#fef3c7', border: '#f59e0b', text: '#92400e' },
  event: { bg: '#fee2e2', border: '#ef4444', text: '#991b1b' },
  birthday: { bg: '#f3e8ff', border: '#a855f7', text: '#6b21a8' },
  holiday: { bg: '#e0e7ff', border: '#6366f1', text: '#3730a3' },
};

// ---------------------------------------------------------------------
// Helper: format header like Google Calendar
// ---------------------------------------------------------------------
const formatHeader = (view, date) => {
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });

  if (view === 'day') {
    return `${date.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}`;
  }
  if (view === 'week') {
    const start = new Date(date);
    start.setDate(date.getDate() - date.getDay());
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    const startStr = start.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    const endStr = end.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    return `${startStr} – ${endStr}, ${year}`;
  }
  return `${month} ${year}`;
};

// ---------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------
export default function CalendarPage() {
  const calendarRef = useRef(null);
  const [view, setView] = useState('month');
  const [headerText, setHeaderText] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [checkedCategories, setCheckedCategories] = useState(
    Object.fromEntries(categories.map(c => [c.id, true]))
  );
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [miniCalendarDate, setMiniCalendarDate] = useState(new Date());

  // Sync header & mini-calendar with main calendar
  useEffect(() => {
    const api = calendarRef.current?.getApi();
    if (api) {
      const cur = api.getDate();
      setHeaderText(formatHeader(view, cur));
      setMiniCalendarDate(cur);
    }
  }, [view]);

  const toggleCategory = (id) => {
    setCheckedCategories(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredEvents = useMemo(() => {
    return dummyEvents
      .filter(e => checkedCategories[e.type])
      .filter(e => e.title.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(e => ({
        ...e,
        backgroundColor: typeColors[e.type].bg,
        borderColor: typeColors[e.type].border,
        textColor: typeColors[e.type].text,
      }));
  }, [checkedCategories, searchQuery]);

  const navigate = (dir) => {
    const api = calendarRef.current?.getApi();
    if (!api) return;
    if (dir === 'prev') api.prev();
    else if (dir === 'next') api.next();
    else if (dir === 'today') api.today();

    const newDate = api.getDate();
    setHeaderText(formatHeader(view, newDate));
    setMiniCalendarDate(newDate);
  };

  const changeView = (v) => {
    setView(v);
    const api = calendarRef.current?.getApi();
    if (!api) return;
    const map = { day: 'timeGridDay', week: 'timeGridWeek', month: 'dayGridMonth' };
    api.changeView(map[v]);
    const newDate = api.getDate();
    setHeaderText(formatHeader(v, newDate));
    setMiniCalendarDate(newDate);
  };

  const handleEventClick = (info) => {
    const event = dummyEvents.find(e => e.id === info.event.id);
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleMiniCalendarSelect = (date) => {
    if (!date) return;
    const api = calendarRef.current?.getApi();
    if (api) {
      api.gotoDate(date);
      const newDate = api.getDate();
      setHeaderText(formatHeader(view, newDate));
      setMiniCalendarDate(newDate);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter flex flex-col">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
      >
        <Menu className="w-5 h-5" />
      </button>

      <div className="flex flex-1">
        {/* ------------------- LEFT SIDEBAR ------------------- */}
        <div
          className={cn(
            'fixed lg:static inset-y-0 left-0 z-40 w-70 bg-white border-r transition-transform flex flex-col',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          )}
        >
          {/* Create Button */}
          <div className="p-4">
            <Button className="w-full bg-blue-700 justify-start gap-2" size="lg">
              <Plus className="w-5 h-5" />
              Create
            </Button>
          </div>

          {/* Mini Calendar – fixed width & height = sidebar */}
        
    <Calendar
      mode="single"
      selected={miniCalendarDate}
      onSelect={handleMiniCalendarSelect}
      className="w-full  border-0 "
      classNames={{
        months: 'flex flex-col space-y-4 flex-1',
        month: 'space-y-4 w-full',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'relative p-0 text-center text-sm focus-within:relative focus-within:z-20',
        day: cn(
          'h-8 w-8 p-0 font-normal aria-selected:opacity-100',
          'hover:bg-accent hover:text-accent-foreground rounded-md'
        ),
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground rounded-md',
        day_today: 'bg-accent text-accent-foreground rounded-md',
        day_outside: 'text-muted-foreground opacity-50',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
      }}
    />


          {/* Categories */}
          <div className="p-4 border-t">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              My Calendars
            </h3>
            <div className="space-y-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={checkedCategories[cat.id]}
                      onCheckedChange={() => toggleCategory(cat.id)}
                    />
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: cat.color }}
                    />
                    <Icon className="w-4 h-4" style={{ color: cat.color }} />
                    <span className="text-sm">{cat.name}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* ------------------- MAIN CONTENT ------------------- */}
        <div className="flex-1 flex flex-col">
          {/* Top Header */}
          <header className="bg-white border-b px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-semibold">Calendar</h1>
            </div>

            <div className="flex items-center gap-2 flex-1 max-w-md">
              <Input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => navigate('today')}>
                Today
              </Button>
              <Button variant="ghost" size="sm" onClick={() => navigate('prev')}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => navigate('next')}>
                <ChevronRight className="w-4 h-4" />
              </Button>
              <span className="text-lg font-medium mx-2">{headerText}</span>
            </div>

            <div className="flex gap-1">
              <Button
                variant={view === 'day' ? 'default' : 'outline'}
                size="sm"
                onClick={() => changeView('day')}
              >
                Day
              </Button>
              <Button
                variant={view === 'week' ? 'default' : 'outline'}
                size="sm"
                onClick={() => changeView('week')}
              >
                Week
              </Button>
              <Button
                variant={view === 'month' ? 'default' : 'outline'}
                size="sm"
                onClick={() => changeView('month')}
              >
                Month
              </Button>
            </div>
          </header>

          {/* Full Calendar */}
          <div className="flex-1 p-4 bg-white">
            <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={false}
              height="100%"
              slotMinTime="00:00:00"
              slotMaxTime="23:59:59"
              nowIndicator={true}
              events={filteredEvents}
              eventClick={handleEventClick}
              eventContent={(info) => {
                const type = info.event.extendedProps?.type || info.event._def.extendedProps?.type;
                const colors = typeColors[type] || typeColors.meeting;
                return (
                  <div
                    className="px-1 text-xs font-medium truncate rounded"
                    style={{
                      backgroundColor: colors.bg,
                      borderLeft: `3px solid ${colors.border}`,
                      color: colors.text,
                    }}
                  >
                    {info.timeText && <span className="mr-1">{info.timeText}</span>}
                    {info.event.title}
                  </div>
                );
              }}
            />
          </div>
        </div>
      </div>

      {/* ------------------- EVENT MODAL ------------------- */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedEvent &&
                categories.find((c) => c.id === selectedEvent.type)?.icon &&
                React.createElement(
                  categories.find((c) => c.id === selectedEvent.type).icon,
                  { className: "w-5 h-5" }
                )}
              {selectedEvent?.title || 'Event'}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 text-sm mt-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <div>
                <p>
                  <strong>Start:</strong>{' '}
                  {selectedEvent?.start
                    ? new Date(selectedEvent.start).toLocaleString()
                    : 'N/A'}
                </p>
                <p>
                  <strong>End:</strong>{' '}
                  {selectedEvent?.end
                    ? new Date(selectedEvent.end).toLocaleString()
                    : 'All day'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: typeColors[selectedEvent?.type]?.border }}
              />
              <p>
                <strong>Type:</strong>{' '}
                {selectedEvent?.type
                  ? categories.find((c) => c.id === selectedEvent.type)?.name
                  : 'Unknown'}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}