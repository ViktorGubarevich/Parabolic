import Card from "./Card";

const Articles = ({ articles }) => {
  return (
    <>
      <div className="list-none space-y-4 text-4xl mb-3">
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
