/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '',
  output: 'export',  // Assurez-vous que cela est bien activé
};

export default nextConfig;
