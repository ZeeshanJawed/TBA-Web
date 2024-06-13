import { notFound } from 'next/navigation'
import ErrorPage from 'next/error'
import PostBody from '../../components/post/post-body'
import PostMore from '../../components/post/post-more'
import PostHeader from '../../components/post/post-header'
import Layout from '../../components/layouts/layout'
import Meta from '../../components/meta/meta'
import { getAllPostsWithSlug, getAllSettings, getPostAndMorePosts } from '../../lib/api'
import { PostSkeleton } from '../../components/skeleton'

export async function generateStaticParams() {
    const allPosts = await getAllPostsWithSlug()
    console.log(allPosts, "Alll______Posts")
    return allPosts.posts.map((post) => ({ slug: post.slug }))
}

async function fetchPostData(slug) {
    try {
        const { post, morePosts } = await getPostAndMorePosts(slug)
        const settings = await getAllSettings()
        return {
            post,
            morePosts: morePosts || [],
            settings,
        }
    } catch (error) {
        return { notFound: true }
    }
}

export default async function Page({ params }) {
    const { slug } = params
    const { post, morePosts, settings, notFound: notFoundError } = await fetchPostData(slug)

    console.log(post, "Get Post and__________")
    console.log(morePosts, "More {Post} and__________")
    console.log(slug, "Slug__________")

    if (notFoundError || !post?.slug) return notFound()

    return (
        <>
            <Meta article={post} settings={settings} />
            <Layout settings={settings}>
                <article className="border-b border-accent-2 pb-16 mb-16">
                    <PostHeader post={post} />
                    <PostBody content={post.html} settings={settings} />
                </article>
                {morePosts.length > 0 && <PostMore posts={morePosts} />}
            </Layout>
        </>
    )
}
