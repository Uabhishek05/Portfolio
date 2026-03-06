import { useEffect } from 'react';

const generateSessionId = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';

  for (let i = 0; i < 32; i += 1) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return id;
};

const useKountSecurity = () => {
  useEffect(() => {
    const enabled = import.meta.env.VITE_KOUNT_ENABLED === 'true';
    const merchantId = import.meta.env.VITE_KOUNT_MERCHANT_ID;
    const collectorUrl = import.meta.env.VITE_KOUNT_COLLECTOR_URL;

    if (!enabled) return;

    if (!merchantId || !collectorUrl) {
      return;
    }

    const sessionId = generateSessionId();
    const src = `${collectorUrl}?m=${encodeURIComponent(merchantId)}&s=${encodeURIComponent(sessionId)}`;

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    script.dataset.kount = 'collector';
    document.head.appendChild(script);

    window.localStorage.setItem('kountSessionId', sessionId);
    window.__KOUNT_SESSION_ID__ = sessionId;

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);
};

export default useKountSecurity;
