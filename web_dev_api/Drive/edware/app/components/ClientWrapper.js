'use client';

import { useEffect } from 'react';
import 'preline/dist/preline'; // Just import to expose global HS

export default function ClientWrapper({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.HS) {
      window.HS.init(); // ✅ Use `window.HS.init()` instead of `autoInit()`
    }
  }, []);

  return <>{children}</>;
}
'use client';

import { useEffect } from 'react';
import 'preline/dist/preline'; // Just import to expose global HS

export default function ClientWrapper({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.HS) {
      window.HS.init(); // ✅ Use `window.HS.init()` instead of `autoInit()`
    }
  }, []);

  return <>{children}</>;
}
