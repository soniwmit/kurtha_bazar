import { useEffect } from 'react';

export function useTracker(currentPage?: string) {
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);

    const paramCid = urlParams.get('cid');
    let cid = paramCid || localStorage.getItem('wmit_active_cid');
    if (paramCid) {
      localStorage.setItem('wmit_active_cid', paramCid);
    }

    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id');
    if (!visitorId) {
      visitorId = 'wmit_' + Math.random().toString(36).substring(2, 15);
      localStorage.setItem('wmit_visitor_id', visitorId);
    }

    let sessionId = sessionStorage.getItem('wmit_session_id');
    if (!sessionId) {
      sessionId = 'wmit_' + Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('wmit_session_id', sessionId);
    }

    const getPageName = () => {
      if (currentPage) {
        return currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
      }
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, '').split('/').pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout> | undefined;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload();
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload();
      }, 60000);
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach((evt) =>
      document.addEventListener(evt, resetIdleTimer, { passive: true })
    );
    resetIdleTimer();
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', sendExitPayload);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      sendExitPayload();
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', sendExitPayload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      activityEvents.forEach((evt) =>
        document.removeEventListener(evt, resetIdleTimer)
      );
      if (idleTimer) clearTimeout(idleTimer);
    };
  }, [currentPage]);
}
