/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/notes',
                permanent: true, // Use false if this is temporary
            },
        ];
    },
};

export default nextConfig;
