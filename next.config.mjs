/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [new URL("https://www.themealdb.com/**")],
  },
  /** can be move new route from old route
    async redirects() {
      return [
        {
          source: '/carts/addToCart',
          destination: '/',
          permanent: true,
        },
      ]
    },
  **/
};

export default nextConfig;
