// app/page.js
'use client';

import { useCurrentUser } from '@/hooks/useCurrentUser';
import MyProjectList from '@/modules/project-management/project/components/MyProjectList';

export default function Page() {
  const { currentUser } = useCurrentUser();

  

  const isAdmin = currentUser?.role === 'cpc' || currentUser?.position === 'Team Lead';

  return (
    <MyProjectList
      mode= 'my'
      employeeId={!isAdmin ? currentUser?.id : undefined}
      canCreate={isAdmin}
      canDelete={isAdmin}
    />
  );
}