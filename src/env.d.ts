/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PHONE_NUMBER: string;
  readonly PHONE_NUMBER_TITLE: string;
  readonly EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
