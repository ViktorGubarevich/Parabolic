import { fetchAPI } from "../../lib/api";
import Articles from "../../components/Articles";
import Search from "../../components/Search";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import RecentArticles from "../../components/RecentArticles";

const Category = ({ category, categories, articles }) => {
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  };

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div className="flex justify-center m-auto text-4xl mb-3 py-16 max-lg:flex-col xl:w-[1140px] lg:w-[960px] md:w-[720px] sm:w-[540px]">
        <Articles articles={category.attributes.articles.data} />
        <div className="flex flex-col px-4 max-lg:pt-4">
          <Search articles={articles} />
          <div className="flex flex-col bg-white rounded-lg">
            <div className="text-2xl uppercase color-[#212b38] px-5 pt-5">
              Recent Articles
            </div>
            <RecentArticles
              articles={[
                articles[0],
                articles[1],
                articles[2],
                articles[3],
                articles[4],
              ]}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const [matchingCategories, categoriesRes, articlesAllRes] = await Promise.all(
    [
      await fetchAPI("/categories", {
        filters: { slug: params.slug },
        populate: {
          articles: {
            populate: "*",
          },
        },
      }),
      fetchAPI("/categories", { populate: "*" }),
      fetchAPI("/articles", { populate: "*" }),
    ]
  );

  return {
    props: {
      category: matchingCategories.data[0],
      categories: categoriesRes,
      articles: articlesAllRes.data,
    },
  };
}

export default Category;
