import { GHOST_API_KEY, GHOST_API_URL, defaultSettings } from "./env";

const is404 = (error) => /not found/i.test(error.message);

async function fetchFromGhost(endpoint, params) {
  const url = new URL(`${GHOST_API_URL}/ghost/api/content/${endpoint}/`);
  url.search = new URLSearchParams({ key: GHOST_API_KEY, ...params }).toString();

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data from Ghost:', error);
    throw error;
  }
}

export async function getAllSettings() {
  const settings = await fetchFromGhost('settings', {});
  return { ...settings, defaultSettings: defaultSettings };
}

export async function getAllPostsWithSlug() {
  const params = {
    fields: "slug",
    limit: "all",
  };
  const posts = await fetchFromGhost('posts', params);
  return posts;
}

export async function getAllPostsForHome(page = 1) {
  const params = {
    limit: "10",
    page: page,
    include: "authors",
    order: "published_at DESC",
  };
  const posts = await fetchFromGhost('posts', params);
  return posts;
}

export async function getPostAndMorePosts(slug) {
  // get full post
  const singleObjectParams = {
    // slug,
    include: ["tags", "authors"],
  };
  let post;
  try {
    if (slug) {

      post = await fetchFromGhost(`posts/slug/` + slug, singleObjectParams);
    }

    else {
      post = await fetchFromGhost('posts', singleObjectParams);
    }


  } catch (error) {
    if (is404(error)) return null;
    throw error;
  }

  // get more stories / post
  const moreObjectParams = {
    limit: 3,
  };
  // const morePosts = (await fetchFromGhost('posts', moreObjectParams))
  //   .filter(({ slug: moreSlug }) => post.slug !== moreSlug)
  //   .slice(0, 2);

  const fetchedPosts = await fetchFromGhost('posts', moreObjectParams);

  const filteredPosts = fetchedPosts.posts.filter(({ slug: moreSlug }) => post.slug !== moreSlug);

  const morePosts = filteredPosts.slice(0, 2);

  return { post, morePosts };
}
