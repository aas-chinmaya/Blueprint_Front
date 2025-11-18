'use client';

import UpdateClient from '@/modules/client-management/components/UpdateClient';

export default function EditPage({ params }) {
  return (
      <>
       
          <UpdateClient clientId={params.id} />
          
        
        </>
  );
}
