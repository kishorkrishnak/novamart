/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com',
          pathname: '/img/**', // Adjust this pattern as necessary
        },
      ],
    },
  };
  
  export default nextConfig;
  