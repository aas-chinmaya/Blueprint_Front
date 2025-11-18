





"use client";

import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";

import { AppSidebar } from "@/components/layout/app-sidebar";
import NotificationsPopover from "@/modules/communication/components/notifications-popover";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";

import { fetchUserByEmail } from "@/modules/user/slices/userSlice";
import { setSidebarByRole } from "@/modules/settings/slices/sidebarSlice";
import { clearProfileImageUrl, fetchProfileImage } from "@/modules/user/slices/profileSlice";
import { useCurrentUser } from "@/hooks/useCurrentUser";

import ProfileDropdownContent from "@/modules/user/components/ProfileDropdownContent";

export default function ProtectedAppShell({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const { user } = useSelector((state) => state.auth) || {};
  const {employeeData,userData}=useSelector((state) => state.user)
  const { currentUser } = useCurrentUser();
  const { profileImageUrl, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const navMainItems = useSelector((state) => state.sidebar.navItems);

  const recipientId = currentUser?.id;

const fallbackChar = currentUser?.name
  ? currentUser.name
      .split(" ")                // split by spaces
      .filter((n, i, arr) => i === 0 || i === arr.length - 1) // take first and last only
      .map(n => n[0].toUpperCase()) // get first char and uppercase
      .join("")                  // join together
  : "NA";


  // Fetch user data
  useEffect(() => {
    dispatch(fetchUserByEmail());
  }, [dispatch]);

  // Setup sidebar based on role & position
  useEffect(() => {
    if (currentUser?.role && currentUser?.position) {
      dispatch(setSidebarByRole({
        role: currentUser.role,
        position: currentUser.position,
      }));
    }
  }, [currentUser?.role, currentUser?.position, dispatch]);

  // Fetch profile image
  useEffect(() => {
    if (currentUser?.id) {
      dispatch(fetchProfileImage(currentUser.id));
    }
  }, [currentUser?.id, dispatch]);

  // Get page title from pathname
  const getPageTitle = () => {
    const path = pathname.split("/")[1];
    return path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home";
  };

  return (
    <SidebarProvider>
      <AppSidebar navMainItems={navMainItems} />
      <SidebarInset className="overflow-x-hidden">
        <header className="sticky top-0 z-30 flex h-13 shrink-0 items-center px-4 w-full gap-2 bg-white transition-[width,height] ease-linear shadow-sm group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">{getPageTitle()}</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* RIGHT SECTION: Notification + Profile */}
          <div className="flex items-center gap-4 ml-auto">
            <NotificationsPopover recipientId={recipientId} />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {profileLoading ? (
                  <Skeleton className="h-10 w-10 rounded-full" />
                ) : (
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
                    <Avatar>
                      {profileImageUrl ? (
                        <AvatarImage src={profileImageUrl} alt={currentUser?.fullName || "User Name!"} />
                      ) : (
                        <AvatarFallback>{fallbackChar}</AvatarFallback>
                      )}
                    </Avatar>
                  </Button>
                )}
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="w-80 p-0 bg-white border rounded-md shadow-lg"
                align="end"
              >
                <ProfileDropdownContent user={currentUser} />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 pt-0">
          <div className="min-h-[100vh] flex-1 md:min-h-min m-2 overflow-auto">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}