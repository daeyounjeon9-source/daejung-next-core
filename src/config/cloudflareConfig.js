export const cloudflareConfig = {
  projectName: import.meta.env.VITE_CLOUDFLARE_PROJECT_NAME || "daejung-next",
  domain: import.meta.env.VITE_PUBLIC_DOMAIN || "daejungnext.com",
  buildCommand: "npm run build",
  outputDirectory: "dist"
};
