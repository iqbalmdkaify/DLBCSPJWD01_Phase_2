/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ROOT_API: string;
}

type ImportMeta = {
  readonly env: ImportMetaEnv;
}
