const env = process.env.NODE_ENV;

export const url =
  env === "production"
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
