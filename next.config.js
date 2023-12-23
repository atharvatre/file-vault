/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com', 'photos.google.com'],
        unoptimized: true,
    }
}

module.exports = nextConfig