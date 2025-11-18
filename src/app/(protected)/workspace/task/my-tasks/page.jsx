'use client';

import EmployeeTaskList from '@/modules/project-management/task/components/EmployeeTaskList';
import { useCurrentUser } from '@/hooks/useCurrentUser';





export default function AllTaskListByRole() {
  const { currentUser} = useCurrentUser();


  return (
    <div className="">
      
        <EmployeeTaskList  currentUser={currentUser} />
      
    </div>
  );
}