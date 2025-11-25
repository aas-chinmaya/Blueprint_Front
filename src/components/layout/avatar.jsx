




"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { fetchProfileImage, clearProfileImageUrl } from "@/features/shared/profileSlice";

export default function UserAvatar({ user }) {
   
    
    
  const dispatch = useDispatch();
  const { profileImageUrl } = useSelector((state) => state.profile);

  const fallbackChar = user?.fullName ? user.fullName.charAt(0).toUpperCase() : "U";
  

  useEffect(() => {
      if (user?.id) {
          dispatch(fetchProfileImage(user.id));
        }
        return () => dispatch(clearProfileImageUrl());
    }, [user?.id, dispatch]);

    console.log("fdgdfg",profileImageUrl);
    
    

  return (
    <Avatar className="h-10 w-10">
 
        <AvatarImage src={profileImageUrl} alt={user?.fullName || "User"} className="object-cover" />
    
    
    </Avatar>
  );
}












