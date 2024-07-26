/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                pathname: '/img/**', // Adjust this pattern as necessary
            },
            {
                protocol: 'https',
                hostname: "images.pexels.com",
                pathname: '/photos/**', // Adjust this pattern as necessary

            },
            {
                protocol: 'https',
                hostname: "lh3.googleusercontent.com",
                pathname: '/a/**', // Adjust this pattern as necessary

            }
        ],
    },
};

export default nextConfig;
