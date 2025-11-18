


'use client';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="w-full py-4 sticky ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className=" border border-border backdrop-blur-md rounded-[10px] px-6 py-4 flex items-center justify-between shadow-sm">
          <div className="text-2xl font-bold text-blue-700 tracking-wide">BluePrint</div>
          <div className="flex items-center gap-4">
            <Button className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600" onClick={() => router.push("/login")}>Login</Button>
          </div>
        </div>
      </div>
    </header>
  );
}



