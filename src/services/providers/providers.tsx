"use client"
import React, { useState } from "react"
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

function Providers({ children }: any) {
  const [client] = useState(new QueryClient())

  return (
    <>
      <QueryClientProvider client={client}>
        <ReactQueryStreamedHydration>
            {children}
        </ReactQueryStreamedHydration>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default Providers 
/*

'use client';

import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export default function Providers({ children }: {children: React.ReactNode}) {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
*/
