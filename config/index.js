const dev = process.env.NODE_ENV !== "production";
export const server = dev
  ? process.env.DEVELOPMENT_ENV_VARIABLE
  : process.env.PRODUCTION_ENV_VARIABLE;
