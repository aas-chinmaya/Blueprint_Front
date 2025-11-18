



"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
  LogOut,
  Settings,
  Bell,
  HelpCircle,
  Camera,
} from "lucide-react";

import { fetchUserByEmail } from "@/modules/user/slices/userSlice";
import { logoutUser } from "@/modules/auth/slices/authSlice";
import {
  fetchProfileImage,
  uploadProfileImage,
  clearProfileImageUrl,
} from "@/modules/user/slices/profileSlice";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { IconDashboard } from "@tabler/icons-react";

export default function ProfileDropdownContent({ user }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useCurrentUser();
  const { employeeData, userData, loading } = useSelector((state) => state.user);
  const { profileImageUrl, loading: profileLoading } = useSelector((state) => state.profile);

  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    dispatch(fetchUserByEmail());
  }, [dispatch]);

  const fallbackChar = currentUser?.name
    ? currentUser.name
        .split(" ")
        .filter((n, i, arr) => i === 0 || i === arr.length - 1)
        .map((n) => n[0].toUpperCase())
        .join("")
    : "NA";

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      try {
        await dispatch(uploadProfileImage({ employeeID: user.id, file })).unwrap();
        toast.success("Profile image uploaded!");
        setSelectedFile(null);
        dispatch(fetchProfileImage(user.id));
      } catch {
        toast.error("Upload failed");
        setSelectedFile(null);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      dispatch(clearProfileImageUrl());
      toast.success("Successfully logged out.");
      router.push("/");
    } catch {
      toast.error("Logout Failed");
    }
  };

  const infoItem = (label, value) => (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs text-gray-400">{label}</span>
      <span className="text-sm font-medium text-gray-900">{value || "-"}</span>
    </div>
  );

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Avatar + Name + Upload */}
      <div className="flex items-center gap-3 p-4 border-b">
        {loading || profileLoading ? (
          <div className="h-12 w-12 rounded-full bg-gray-200 animate-pulse" />
        ) : (
          <div className="relative group">
            <Avatar className="h-12 w-12">
              {profileImageUrl ? (
                <AvatarImage src={profileImageUrl} alt="User Avatar" />
              ) : (
                <AvatarFallback>{fallbackChar}</AvatarFallback>
              )}
            </Avatar>
            {/* Upload icon */}
            <label
              htmlFor="profile-upload"
              className={`absolute bottom-0 right-0 p-1 bg-white rounded-full shadow-md cursor-pointer flex items-center justify-center ${
                profileImageUrl ? "opacity-0 group-hover:opacity-100 transition-opacity" : "opacity-100"
              }`}
            >
              <Camera className="w-4 h-4 text-blue-600" />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="profile-upload"
              />
            </label>
          </div>
        )}

        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-900">
            {employeeData?.firstName} {employeeData?.lastName}
          </span>
          <span className="text-xs text-gray-500">{userData?.username || user?.email}</span>
        </div>
      </div>

      {/* Employee Info Column */}
      <div className="flex flex-col gap-3 p-4">
        {infoItem("Designation", employeeData?.designation)}
        {infoItem("Role", employeeData?.role)}
        {infoItem("Email", employeeData?.email)}
        {infoItem("Phone", employeeData?.phoneNo)}
        {infoItem("Employee ID", employeeData?.employeeID)}
      </div>

      <Separator />

      {/* Actions */}
      <div className="flex flex-col gap-2 p-4 mt-auto">
        <Button variant="ghost"  onClick={()=>router.push("/dashboard")} className="justify-start gap-2 w-full">
          <IconDashboard size={16} /> Dashboard
        </Button>
        <Button onClick={()=>router.push("/inbox")} variant="ghost" className="justify-start gap-2 w-full">
          <Bell size={16} /> Notifications
        </Button>
    

        <Separator />

        <Button
          variant="ghost"
          onClick={handleLogout}
          className="justify-start gap-2 w-full text-red-600"
        >
          <LogOut size={16} /> Logout
        </Button>
      </div>
    </div>
  );
}
