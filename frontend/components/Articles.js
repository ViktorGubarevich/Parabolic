import Card from "./Card";

const Articles = ({ articles }) => {
  return (
    <>
      <div className="flex flex-col px-4 xl:w-[1140px] lg:w-[960px] md:w-[720px] sm:w-[540px]">
        {articles &&
          articles.map((article) => {
            return (
              <Card
                article={article}
                key={`article__${article.attributes.slug}`}
              />
            );
          })}
      </div>
    </>
  );
};

export default Articles;
