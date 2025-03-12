// Define an interface for environment variables specific to Vite
interface ImportMetaEnv {
  // Declare a read-only property for the Unsplash access key
  readonly VITE_UNSPLASH_ACCESS_KEY: string;
}

// Define an interface for the import meta object
interface ImportMeta {
  // Declare a read-only property for the environment variables
  readonly env: ImportMetaEnv;
}
