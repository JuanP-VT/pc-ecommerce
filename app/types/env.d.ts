declare namespace NodeJS {
  interface ProcessEnv {
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    MONGODB_URI: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    SESSION_CART_KEY: string;
    AUTH_HEADER_SECRET: string;
  }
}
