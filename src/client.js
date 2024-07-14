import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "rnh21rzn",
    dataset: "production",
    useCdn: false, // `true` if you want to use the CDN for faster response, `false` for fresh data
    apiVersion: '2024-07-14', // use a UTC date string
})