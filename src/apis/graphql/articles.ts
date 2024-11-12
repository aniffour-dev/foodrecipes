import { gql } from "graphql-request";
import { client } from "@/apis/graphql/graphql-client";

export interface Post {
  id: string;
  title: string;
  date: string;
  content: string;
  seo: {
    metaDesc: string;
    title: string;
    opengraphPublishedTime: string;
    opengraphModifiedTime: string;
  };
  slug: string;
  author: {
    node: {
      name: string;
    };
  };
  categories: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
      title: string;
    };
  } | null;
}

interface PostsQueryResult {
  posts: {
    nodes: Post[];
  };
}

// Chicken Recipes Queries
const ChickenRecipes = gql`
  query GetPosts {
    posts(
      first: 6
      where: {
        orderby: { field: DATE, order: DESC }
        categoryName: "Chicken Recipes"
        status: PUBLISH
      }
    ) {
      nodes {
        id
        title
        content
        date
        slug
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            title
          }
        }
        seo {
          metaDesc
          title
          opengraphPublishedTime
          opengraphModifiedTime
        }
      }
    }
  }
`;

// Tires Pressure Posts
export async function chiecken_recipes_articles(): Promise<Post[]> {
  try {
    const data = await client.request<PostsQueryResult>(ChickenRecipes);
    return data.posts.nodes;
  } catch {
    return [];
  }
}

const BreadRecipes = gql`
  query GetPosts {
    posts(
      first: 6
      where: {
        orderby: { field: DATE, order: DESC }
        categoryName: "Bread Recipes"
        status: PUBLISH
      }
    ) {
      nodes {
        id
        title
        content
        date
        slug
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            title
          }
        }
        seo {
          metaDesc
          title
          opengraphPublishedTime
          opengraphModifiedTime
        }
      }
    }
  }
`;

// Bread Recipes Posts
export async function bread_recipes_articles(): Promise<Post[]> {
  try {
    const data = await client.request<PostsQueryResult>(BreadRecipes);
    return data.posts.nodes;
  } catch {
    return [];
  }
}

// Cookies Recipes Queries
const CookiesRecipes = gql`
  query GetPosts {
    posts(
      first: 6
      where: {
        orderby: { field: DATE, order: DESC }
        categoryName: "Cookies Recipes"
        status: PUBLISH
      }
    ) {
      nodes {
        id
        title
        content
        slug
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            title
          }
        }
        seo {
          metaDesc
          title
          opengraphPublishedTime
          opengraphModifiedTime
        }
      }
    }
  }
`;

// Cookies Recipes Posts
export async function cookies_recipes_articles(): Promise<Post[]> {
  try {
    const data = await client.request<PostsQueryResult>(CookiesRecipes);
    return data.posts.nodes;
  } catch {
    return [];
  }
}

const CakeRecipes = gql`
  query GetPosts {
    posts(
      first: 6
      where: {
        orderby: { field: DATE, order: DESC }
        categoryName: "Cookies Recipes"
        status: PUBLISH
      }
    ) {
      nodes {
        id
        title
        content
        slug
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            title
          }
        }
        seo {
          metaDesc
          title
          opengraphPublishedTime
          opengraphModifiedTime
        }
      }
    }
  }
`;

// Cake Recipes Posts
export async function cake_recipes_articles(): Promise<Post[]> {
  try {
    const data = await client.request<PostsQueryResult>(CakeRecipes);
    return data.posts.nodes;
  } catch {
    return [];
  }
}

const FeaturedArticles = gql`
  query GetPosts {
    posts(
      first: 6
      where: { status: PUBLISH }
    ) {
      nodes {
        id
        title
        content
        date
        slug
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            title
          }
        }
        seo {
          metaDesc
          title
          opengraphPublishedTime
          opengraphModifiedTime
        }
      }
    }
  }
`;

// Featured Articles
export async function featured_articles(): Promise<Post[]> {
  try {
    const data = await client.request<PostsQueryResult>(FeaturedArticles);
    return data.posts.nodes;
  } catch {
    return [];
  }
}