/// <reference types="vite/client" />
//this file is to declare the types of the environment variables so that we can use them in our code
interface ImportMetaEnv {
  readonly VITE_UNSPLASH_ACCESS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
