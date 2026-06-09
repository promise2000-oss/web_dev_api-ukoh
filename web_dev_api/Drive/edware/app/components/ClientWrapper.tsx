'use client';

import { useEffect, ReactNode } from 'react';
import 'preline/dist/preline';

declare global {
  interface Window {
    HS: { init: () => void };
  }
}

export default function ClientWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.HS) {
      window.HS.init();
    }
  }, []);

  return <>{children}</>;
}
