import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import { fetchAPI, fetcher } from "../lib/api";
import NextImage from "../components/Image";
import Seo from "../components/Seo";

const Portfolios = ({ categories, portfolio }) => {
  const seo = {
    metaTitle: portfolio.attributes.title,
    metaDescription: portfolio.attributes.subtitle,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className="w-[1200px] px-4 flex flex-col font-light">
        <div className="flex flex-col justify-center justify-items-center content-center items-center">
          <div className="text-4xl font-thin mb-5 uppercase tracking-widest text-center">
            {portfolio.attributes.title}
          </div>
          <div
            id="link"
            className="flex uppercase tracking-wider text-center pb-4"
          >
            <ReactMarkdown>{portfolio.attributes.subtitle}</ReactMarkdown>
          </div>
          <NextImage image={portfolio.attributes.image} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const [categoriesRes, portfolioRes] = await Promise.all([    
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/portfolio", { populate: "*" }),
  ]);  

  return {
    props: {      
      categories: categoriesRes.data,
      portfolio: portfolioRes.data,
    },
    revalidate: 1,
  };
}

export default Portfolios;
