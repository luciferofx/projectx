/* ============================================================
   PROJECT X · SERVICE WORKER
   Intercepts /api/* calls → returns simulated JSON
   Visible in DevTools → Network as real requests.
   ============================================================ */

const VERSION = '4.0.0';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Only intercept /api/* calls
  if (!url.pathname.startsWith('/api/')) return;

  event.respondWith(handleApi(event.request, url));
});

async function handleApi(req, url) {
  const delay = 50 + Math.random() * 150; // realistic network latency
  await new Promise(r => setTimeout(r, delay));

  let body = {};
  try {
    if (req.method === 'POST') body = await req.json();
  } catch(_) {}

  const path = url.pathname;
  let payload;

  if (path === '/api/serial/connect') {
    payload = { ok: true, port: body.port || 'USB', baud: body.baud || 9600, sessionId: 'px_' + Date.now() };
  } else if (path === '/api/serial/disconnect') {
    payload = { ok: true, closed: true, ts: Date.now() };
  } else if (path === '/api/scan/complete') {
    payload = { ok: true, received: (body.devices || []).length, ts: Date.now() };
  } else if (path === '/api/sim/start') {
    payload = { ok: true, mode: 'simulation', baud: body.baud };
  } else if (path === '/api/board/power') {
    payload = { ok: true, state: body.state, ts: Date.now() };
  } else if (path === '/api/firmware/upload') {
    payload = { ok: true, file: body.name, size: body.size, accepted: /\.(hex|ihx)$/i.test(body.name || '') };
  } else if (path === '/api/flash/start') {
    payload = { ok: true, started: true, target: 'ATmega328P', protocol: 'STK500v1' };
  } else if (path === '/api/flash/complete') {
    payload = { ok: true, written: body.name, verified: true, ts: Date.now() };
  } else {
    payload = { ok: false, error: 'unknown_endpoint', path };
  }

  return new Response(JSON.stringify({
    service: 'projectx-api',
    version: VERSION,
    ...payload
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'X-ProjectX-Version': VERSION,
      'Cache-Control': 'no-store'
    }
  });
}
