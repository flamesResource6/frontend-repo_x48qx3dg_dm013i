export function resolveBackendUrl() {
  const env = import.meta.env?.VITE_BACKEND_URL;
  if (env && typeof env === 'string' && env.trim().length > 0) return env;
  try {
    const { host, protocol } = window.location;
    // Common pattern in this environment: swap port/subdomain 3000 -> 8000
    if (host.includes('3000')) {
      return `${protocol}//${host.replace('3000', '8000')}`;
    }
    // Fallback: same host (works if reverse-proxy mounted)
    return `${protocol}//${host}`;
  } catch {
    return '';
  }
}

export async function getJSON(path) {
  const base = resolveBackendUrl();
  const url = `${base}${path}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}
