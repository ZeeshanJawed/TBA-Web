// app/blogs/page.tsx

import HeroPost from '../components/home/hero-post';
import MorePost from '../components/home/more-post';
import Intro from '../components/home/intro';
import Layout from '../components/layouts/layout';
import Meta from '../components/meta/meta';
import { getAllPostsForHome, getAllSettings } from '../lib/api';

export default async function Index() {
    const allPosts = (await getAllPostsForHome()) || [];
    const settings = await getAllSettings();
    const postMeta = allPosts.meta || {};

    const heroPost = allPosts.posts[0];
    const morePosts = allPosts.posts.slice(1);

    return (
        <div style={{
            backgroundImage: 'url(/bg-top.png)'
        }}>
            <Meta settings={settings} />
            <Layout settings={settings}>
                <Intro title={settings.settings.title} description={settings.settings.description} />
                {heroPost && <HeroPost post={heroPost} />}
                {morePosts.length > 0 && <MorePost initialPosts={morePosts} initialMeta={postMeta} />}
            </Layout>
        </div>
    );
}
