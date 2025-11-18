
// "use client";

// import {
//   Sheet,
//   SheetContent
// } from "@/components/ui/sheet";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent
// } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableRow
// } from "@/components/ui/table";
// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage
// } from "@/components/ui/avatar";
// import {
//   Button
// } from "@/components/ui/button";
// import {
//   Skeleton
// } from "@/components/ui/skeleton";

// import {
//   Phone,
//   Mail,
//   Briefcase,
//   LogOut,
//   User2Icon
// } from "lucide-react";

// import {
//   useDispatch,
//   useSelector
// } from "react-redux";
// import {
//   useEffect
// } from "react";
// import {
//   fetchUserByEmail
// } from "@/features/shared/userSlice";
// import {
//   logoutUser
// } from "@/features/shared/authSlice";
// import {
//   useRouter
// } from "next/navigation";
// import {
//   toast
// } from "sonner";

// export default function ProfileSheet({
//   open,
//   onClose
// }) {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const {
//     userData,
//     employeeData,
//     loading
//   } = useSelector((state) => state.user);

//   useEffect(() => {
//     if (open) dispatch(fetchUserByEmail());
//   }, [dispatch, open]);

//   const handleLogout = async () => {
//     try {
//       await dispatch(logoutUser()).unwrap();
//       toast.success("Successfully logged out.");
//       onClose();
//       router.push("/");
//     } catch (error) {
//       toast.error("Logout Failed");
//     }
//   };

//   return (
//     <Sheet open={open} onOpenChange={onClose}>
//       <SheetContent
//         side="right"
//         className="w-full max-w-sm sm:max-w-sm md:max-w-md h-full p-0 overflow-hidden"
//       >
//         <div className="flex flex-col h-full relative">
//           {/* Scrollable content */}
//           <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-6">
//             {/* Profile Header */}
//             <div className="flex flex-col items-center text-center gap-3">
//               {loading ? (
//                 <Skeleton className="h-24 w-24 rounded-full" />
//               ) : (
//                 <Avatar className="h-24 w-24 ring-4 ring-green-400 shadow-xl">
//                   <AvatarImage
//                     src={!userData?.profilePicture || "/Avatar.png"}
//                     alt="User Avatar"
//                     className="w-full h-full object-cover"
//                   />
//                   <AvatarFallback className="text-xl text-white bg-gray-400">
//                     {userData?.fullName
//                       ?.split(" ")
//                       .map((n) => n[0])
//                       .join("") || "U"}
//                   </AvatarFallback>
//                 </Avatar>
//               )}

//               {loading ? (
//                 <div className="space-y-2 mt-2 w-full">
//                   <Skeleton className="h-4 w-32 mx-auto" />
//                   <Skeleton className="h-3 w-24 mx-auto" />
//                   <Skeleton className="h-3 w-40 mx-auto" />
//                 </div>
//               ) : (
//                 <div>
//                   <h2 className="text-xl font-bold text-blue-900">
//                     {userData?.fullName || "Loading..."}
//                   </h2>
//                   <p className="text-sm text-muted-foreground">
//                     {userData?.role || "Employee"}
//                   </p>
//                   <p className="text-sm text-gray-600 break-all">
//                     {userData?.email || "Email not available"}
//                   </p>
//                 </div>
//               )}
//             </div>

//             {/* Personal Info Card */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-base text-blue-700">
//                   Personal Information
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="px-2">
//                 <Table>
//                   <TableBody>
//                     <InfoRow
//                       icon={<User2Icon className="text-blue-500 w-4 h-4" />}
//                       label="Employee Id"
//                       value={employeeData?.employeeID}
//                       loading={loading}
//                     />
//                     <InfoRow
//                       icon={<Mail className="text-blue-500 w-4 h-4" />}
//                       label="Email"
//                       value={userData?.email}
//                       loading={loading}
//                     />
//                     <InfoRow
//                       icon={<Phone className="text-green-500 w-4 h-4" />}
//                       label="Contact"
//                       value={userData?.contact}
//                       loading={loading}
//                     />
//                     <InfoRow
//                       icon={<Briefcase className="text-indigo-500 w-4 h-4" />}
//                       label="Designation"
//                       value={employeeData?.designation}
//                       loading={loading}
//                     />
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Logout Button (fixed bottom) */}
//           <div className="p-4 border-t bg-white/90 backdrop-blur-md sticky bottom-0">
//             <Button
//               variant="destructive"
//               onClick={handleLogout}
//               className="cursor-pointer w-full flex items-center justify-center gap-2 text-base hover:bg-red-700 transition-colors"
//             >
//               <LogOut className="h-4 w-4" />
//               Sign Out
//             </Button>
//           </div>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// }

// function InfoRow({ icon, label, value, loading }) {
//   return (
//     <TableRow>
//       <TableCell className="font-medium text-gray-800 w-[40%] align-top">
//         <div className="flex items-start gap-2">
//           {icon}
//           <span>{label}</span>
//         </div>
//       </TableCell>
//       <TableCell className="text-gray-600 break-words max-w-[160px]">
//         {loading ? <Skeleton className="h-4 w-full" /> : value || "N/A"}
//       </TableCell>
//     </TableRow>
//   );
// }




"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Button,
} from "@/components/ui/button";
import {
  Skeleton,
} from "@/components/ui/skeleton";
import {
  Phone,
  Mail,
  Briefcase,
  LogOut,
  User2Icon,
  Settings,
  Bell,
  HelpCircle,
  ClipboardList,
  FileText,
  AlarmClock,
  StickyNote,
  Video,
  CalendarPlus,
  Users,
  LayoutDashboard,
  Trash2,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserByEmail } from "@/features/shared/userSlice";
import { logoutUser } from "@/features/shared/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ProfileDropdown({ open, onClose }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userData, employeeData, loading } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (open) dispatch(fetchUserByEmail());
  }, [dispatch, open]);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      toast.success("Successfully logged out.");
      onClose();
      router.push("/");
    } catch (error) {
      toast.error("Logout Failed");
    }
  };

  return (
    <DropdownMenu open={open} onOpenChange={onClose}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-2">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={userData?.profilePicture || "/Avatar.png"}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
            <AvatarFallback className="text-sm text-white bg-gray-800">
              {userData?.fullName?.split(" ").map((n) => n[0]).join("") || "U"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-80 p-0 bg-white border rounded-md shadow-lg"
        align="end"
      >
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b">
          {loading ? (
            <Skeleton className="h-12 w-12 rounded-full bg-gray-200" />
          ) : (
            <Avatar className="h-12 w-12">
              <AvatarImage
                src={userData?.profilePicture || "/Avatar.png"}
                alt="User Avatar"
              />
              <AvatarFallback className="text-sm bg-black text-white">
                {userData?.fullName?.split(" ").map((n) => n[0]).join("") || "U"}
              </AvatarFallback>
            </Avatar>
          )}
          <div>
            <h2 className="font-semibold text-gray-900">
              {userData?.fullName || "Loading..."}
            </h2>
            <p className="text-sm text-gray-600">{userData?.email}</p>
          </div>
        </div>

        {/* General Section */}
        <div className="p-2 border-b text-sm text-gray-700">
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <Settings className="w-4 h-4" /> Settings
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <Bell className="w-4 h-4" /> Notifications
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <HelpCircle className="w-4 h-4" /> Help
          </div>
        </div>

        {/* Personal Tools */}
        <div className="p-2 border-b text-sm text-gray-700">
          <h4 className="px-2 mb-1 text-xs font-medium uppercase text-gray-500">
            Personal Tools
          </h4>
          <div className="flex flex-col">
            <ToolItem icon={<ClipboardList className="w-4 h-4" />} text="Create Task" />
            <ToolItem icon={<FileText className="w-4 h-4" />} text="My Work" />
            <ToolItem icon={<AlarmClock className="w-4 h-4" />} text="Track Time" />
            <ToolItem icon={<StickyNote className="w-4 h-4" />} text="Notepad" />
            <ToolItem icon={<Video className="w-4 h-4" />} text="Record a Clip" />
            <ToolItem icon={<CalendarPlus className="w-4 h-4" />} text="Create Reminder" />
            <ToolItem icon={<FileText className="w-4 h-4" />} text="Create Doc" />
            <ToolItem icon={<LayoutDashboard className="w-4 h-4" />} text="Create Dashboard" />
            <ToolItem icon={<Users className="w-4 h-4" />} text="View People" />
          </div>
        </div>

        {/* Trash + Logout */}
        <div className="p-2 text-sm text-gray-700">
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <Trash2 className="w-4 h-4" /> Trash
          </div>
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full flex items-center gap-2 text-red-600 hover:bg-red-50 mt-2"
          >
            <LogOut className="w-4 h-4" /> Log out
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ToolItem({ icon, text }) {
  return (
    <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
      {icon} {text}
    </div>
  );
}
