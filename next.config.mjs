/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/Portefolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portefolio/' : '',
  output: 'export',  // Assurez-vous que cela est bien activé
};

export default nextConfig;
