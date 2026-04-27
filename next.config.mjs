const isStaticExport = false;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "res.cloudinary.com" }
    ],
    unoptimized: isStaticExport
  },
  output: isStaticExport ? "export" : undefined,
  typedRoutes: true
};

export default nextConfig;
