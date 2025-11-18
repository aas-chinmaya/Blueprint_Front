'use client';

import  ClientDetails from '@/modules/client-management/components/ClientDetails';

export default function Page({ params }) {
  return (
    
    <>
     
    <ClientDetails clientId={params.id} />
      
    
    </>
  );
}
