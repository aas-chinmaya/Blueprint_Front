





'use client';

import { use } from 'react';
import ViewProjectById from '@/modules/project-management/project/components/ViewProjectById';

export default function Page({ params }) {
  const resolvedParams = use(params); // Unwrap the params Promise
  return (
    <>
    
        <ViewProjectById projectId={resolvedParams.id} />
   
    </>
  );
}