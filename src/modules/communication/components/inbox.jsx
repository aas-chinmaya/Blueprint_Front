

"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Bell, Check, Trash2, X } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  fetchNotifications,
  deleteNotification,
  deleteAllNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  markAsReadLocal,
} from '@/modules/communication/slices/notificationSlice';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { AnimatePresence, motion } from "framer-motion";

export default function Inbox() {
  const [selectedNotification, setSelectedNotification] = useState(null);
  const dispatch = useDispatch();
  const { currentUser } = useCurrentUser();
  const recipientId = currentUser?.id;

  const { items: notifications = [], loading, error } =
    useSelector((state) => state.notifications) || {};

  // Fetch notifications on load
  useEffect(() => {
    if (recipientId) dispatch(fetchNotifications(recipientId));
  }, [dispatch, recipientId]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Mark single notification as read
  const handleMarkAsRead = async (id) => {
    try {
      await dispatch(markNotificationAsRead(id)).unwrap();
      dispatch(markAsReadLocal(id));
      // Redux state updates after API success
    } catch (err) {
      // console.error("Failed to mark as read:", err);
    }
  };

  // Delete single notification
  const handleDeleteNotification = async (id) => {
    try {
      await dispatch(deleteNotification(id)).unwrap();
      if (selectedNotification?._id === id) setSelectedNotification(null);
    } catch (err) {
      // console.error("Failed to delete notification:", err);
    }
  };

  // Delete all notifications
  const handleDeleteAll = async () => {
    try {
      await dispatch(deleteAllNotifications(recipientId)).unwrap();
      setSelectedNotification(null);
    } catch (err) {
      // console.error("Failed to delete all notifications:", err);
    }
  };

  // Mark all as read
  const handleMarkAllAsRead = async () => {
    try {
      await dispatch(markAllNotificationsAsRead(recipientId)).unwrap();
    } catch (err) {
      // console.error("Failed to mark all as read:", err);
    }
  };

  // Select notification
  const handleSelectNotification = (notification) => {
    setSelectedNotification(notification);
    if (!notification.read) {
      handleMarkAsRead(notification._id);
      
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = Date.now();
    const minutes = Math.floor((now - date.getTime()) / 60000);
    if (minutes < 1) return "Received just now";
    if (minutes < 60) return `Received ${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    if (minutes < 1440) return `Received ${Math.floor(minutes / 60)} hour${Math.floor(minutes / 60) > 1 ? "s" : ""} ago`;
    return `Received on ${date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
  };

  return (
    <div className="flex h-screen w-full bg-background">
      {/* Left Side: Notification List */}
      <div className="w-full md:w-1/4 border-r bg-muted/10 p-1 flex flex-col">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h4 className="font-semibold text-lg">
            Notifications {unreadCount > 0 && <span className="text-sm text-rose-500">({unreadCount} Unread)</span>}
          </h4>
          <div className="flex items-center gap-2">
            {unreadCount > 0 && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={handleMarkAllAsRead}>
                      <Check className="h-4 w-4 text-green-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Mark all as read</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {notifications.length > 0 && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={handleDeleteAll}>
                      <Trash2 className="h-4 w-4 text-rose-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Clear all</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-gray-100">
          {loading.fetch ? (
            <div className="py-6 text-center text-rose-500">{error.fetch}</div>
          ) : notifications.length === 0 ? (
            <div className="py-6 text-center text-muted-foreground">
              <Bell className="mx-auto h-8 w-8 mb-2" />
              No notifications
            </div>
          ) : (
            <div className="divide-y">
              <AnimatePresence>
                {notifications.map((notification) => {
                  const isSelected = selectedNotification?._id === notification._id;
                  const isRead = notification.read;

                  return (
                    <motion.div
                      key={notification._id || notification.id}
                      layout
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      onClick={() => handleSelectNotification(notification)}
                      className={cn(
                        "py-3 px-3 cursor-pointer transition-colors rounded-lg flex justify-between items-start relative group",
                        isSelected ? "bg-indigo-100" : "bg-white",
                        !isSelected && "hover:bg-indigo-100"
                      )}
                    >
                      <div className="flex-1 min-w-0">
                        <p
                          className={cn(
                            "text-sm truncate",
                            !isRead ? "font-bold text-gray-800" : "font-normal text-gray-600"
                          )}
                        >
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatTimestamp(notification.createdAt)}
                        </p>
                      </div>

                      {/* Delete icon visible only on hover */}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteNotification(notification._id);
                        }}
                        className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity absolute right-2 top-1/2 -translate-y-1/2"
                      >
                        <Trash2 className="h-5 w-5 text-rose-500" />
                      </Button>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex md:w-3/4 p-6 flex-col">
        {selectedNotification ? (
          <div className="flex-1">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="text-xl font-semibold">Notification Details</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDeleteNotification(selectedNotification._id)}
              >
                <Trash2 className="h-5 w-5 text-rose-500" />
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Message</h4>
                <p className="text-sm text-muted-foreground">{selectedNotification.message}</p>
              </div>
              <div>
                <h4 className="font-medium">Received</h4>
                <p className="text-sm text-muted-foreground">{formatTimestamp(selectedNotification.createdAt)}</p>
              </div>
              <div>
                <h4 className="font-medium">Status</h4>
                <span
                  className={cn(
                    "text-xs px-2 py-1 rounded",
                    selectedNotification.read ? "bg-green-100 text-green-700" : "bg-rose-100 text-rose-700"
                  )}
                >
                  {selectedNotification.read ? "Read" : "Unread"}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <p>Select a notification to view details</p>
          </div>
        )}
      </div>

      {/* Mobile Dialog */}
      <Dialog
        open={selectedNotification && window.innerWidth < 768}
        onOpenChange={() => setSelectedNotification(null)}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Notification Details</DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" onClick={() => setSelectedNotification(null)}>
                <X className="h-5 w-5" />
              </Button>
            </DialogClose>
          </DialogHeader>
          {selectedNotification && (
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Message</h4>
                <p className="text-sm text-muted-foreground">{selectedNotification.message}</p>
              </div>
              <div>
                <h4 className="font-medium">Received</h4>
                <p className="text-sm text-muted-foreground">{formatTimestamp(selectedNotification.createdAt)}</p>
              </div>
              <div>
                <h4 className="font-medium">Status</h4>
                <span
                  className={cn(
                    "text-xs px-2 py-1 rounded",
                    selectedNotification.read ? "bg-green-100 text-green-700" : "bg-rose-100 text-rose-700"
                  )}
                >
                  {selectedNotification.read ? "Read" : "Unread"}
                </span>
              </div>
              <Button
                variant="destructive"
                onClick={() => handleDeleteNotification(selectedNotification._id)}
                className="w-full"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Notification
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}