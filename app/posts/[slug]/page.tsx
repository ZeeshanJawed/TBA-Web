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
    return allPosts.posts.map((post: any) => ({ slug: post.slug }))
}

async function fetchPostData(slug: any) {
    try {
        const { post, morePosts }: any = await getPostAndMorePosts(slug)
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

export default async function Page({ params }: any) {
    const { slug } = params
    const { post, morePosts, settings, notFound: notFoundError } = await fetchPostData(slug)

    if (notFoundError || !post.posts[0]?.slug) return notFound()

    return (
        <div
            className='bg-gradient-blog1'
        // style={{ backgroundImage: 'url(/bg-top.png)', backgroundSize: "cover" }}
        >
            <Meta article={post} settings={settings} />
            <Layout settings={settings}>
                <article className="border-b border-accent-2 pb-16 mb-16">
                    <PostHeader post={post.posts[0]} />
                    <PostBody content={post.posts[0].html} settings={settings} />
                </article>
                {morePosts.length > 0 && <PostMore posts={morePosts} />}
            </Layout>
        </div>
    )
}
