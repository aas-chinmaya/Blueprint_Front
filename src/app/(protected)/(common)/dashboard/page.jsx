

// "use client";


// import { useCurrentUser } from "@/hooks/useCurrentUser";
// import EmployeeDashboard from "@/modules/dashboard/employeeDashboard";
// import { CpcDashboard } from "@/modules/dashboard/cpcDashboard";

// export default function Dashboard() {
//   const { currentUser } = useCurrentUser();
//   const employeeId = currentUser?.employeeID  // Default to a specific employee ID if not available


//   return (
//     <div className="p-4">
    
//       {currentUser?.isCpc ? (
//     <CpcDashboard/>
      
//       ) : (
       
//         <EmployeeDashboard employeeId={employeeId} />
//       )}

//     </div>

//   );
// }




"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import EmployeeDashboard from "@/modules/dashboard/components/employeeDashboard";
import { CpcDashboard } from "@/modules/dashboard/components/cpcDashboard";

export default function Dashboard() {
  const { currentUser } = useCurrentUser();

  if (!currentUser)
    return <div className="p-6 text-center text-gray-500">Loading...</div>;

  const { role, employeeId } = currentUser;

  if (role === "cpc") return <CpcDashboard />;

  else return <EmployeeDashboard employeeId={employeeId} />;
  // if (role === "employee" || "admin") return <EmployeeDashboard employeeId={employeeId} />;

  // return (
  //   <div className="flex items-center justify-center h-[80vh]">
  //     <div className="text-center">
  //       <h1 className="text-2xl font-semibold text-red-600">Unauthorized Access</h1>
  //       <p className="text-gray-500 mt-2">
  //         You do not have permission to view this page.
  //       </p>
  //     </div>
  //   </div>
  // );
}
