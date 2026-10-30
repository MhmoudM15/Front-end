/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Local read-only preview unless explicitly set to "false". */
  readonly VITE_DEMO_MODE?: string;
  /** Public base domain, e.g. "edunova.com". Slugs are read from hostnames like "{slug}.edunova.com". */
  readonly VITE_PLATFORM_BASE_DOMAIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
