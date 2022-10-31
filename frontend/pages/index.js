import Layout from "../components/Layout";
import Articles from "../components/Articles";
import { fetchAPI } from "../lib/api";
import Seo from "../components/Seo";
import { useFetchUser } from "../lib/authContext";
import Login from "../components/Login";

export default function Home({ articles, categories, homepage }) {
  const { user } = useFetchUser();

  return (
    <>
      {user ? (
        <Layout user={user} categories={categories}>
          <Seo seo={homepage.attributes.seo} />
          <Articles articles={articles} />
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
}

export async function getStaticProps() {
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}
