// "use client"

// import { useTheme } from "next-themes"
// import { Toaster as Sonner } from "sonner";

// const Toaster = ({
//   ...props
// }) => {
//   const { theme = "system" } = useTheme()

//   return (
//     <Sonner
//       theme={theme}
//       className="toaster group"
//       style={
//         {
//           "--normal-bg": "var(--popover)",
//           "--normal-text": "var(--popover-foreground)",
//           "--normal-border": "var(--border)"
//         }
//       }
//       {...props} />
//   );
// }

// export { Toaster }



"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

export const Toaster = (props) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      position="top-right"
      richColors     // ✅ enables Sonner’s built-in variant colors
      closeButton    // ✅ adds a close button for better UX
      toastOptions={{
        // Default toast style
        style: {
          background: "var(--toast-bg, #1f2937)", // fallback dark gray
          color: "var(--toast-text, #f9fafb)",
          borderRadius: "0.5rem",
          border: "1px solid rgba(255,255,255,0.1)",
        },
        // ✅ Success toast
        success: {
          style: {
            background: "#16a34a", // green-600
            color: "#ffffff",
            border: "1px solid #15803d",
          },
        },
        // ✅ Error toast
        error: {
          style: {
            background: "#dc2626", // red-600
            color: "#ffffff",
            border: "1px solid #991b1b",
          },
        },
        // ✅ Warning toast
        warning: {
          style: {
            background: "#f59e0b", // amber-500
            color: "#ffffff",
            border: "1px solid #b45309",
          },
        },
        // ✅ Info toast
        info: {
          style: {
            background: "#3b82f6", // blue-500
            color: "#ffffff",
            border: "1px solid #1d4ed8",
          },
        },
      }}
      {...props}
    />
  );
};



