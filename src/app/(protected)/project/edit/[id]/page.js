'use client';

import { use } from 'react';
import ProjectEditForm from '@/modules/project-management/project/components/ProjectEditForm';

export default function Page({ params }) {
  const resolvedParams = use(params); // ✅ unwrap the promise
  const projectId = resolvedParams.id;

  return (
    <div className="px-4 lg:px-6">
      <ProjectEditForm projectId={projectId} />
    </div>
  );
}
