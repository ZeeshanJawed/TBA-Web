/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "localhost",
            "images.unsplash.com",
            "static.gotsby.org",
            "static.ghost.org",
            "gatsby.ghost.io",
            "ghost.org",
            "blog.thinkbot.agency",
            "https://blog.thinkbot.agency",
            "repository-images.githubusercontent.com",
            "www.gravatar.com",
            "github.githubassets.com",
            ...(process.env.IMAGE_DOMAINS || "").split(","),
        ],
    }
};

export default nextConfig;
