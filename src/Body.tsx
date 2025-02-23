import Article from "./Article";
import { Articles } from "./articles";
import ObserveAppear from "./ObserveSlideIn";

interface ArticleProps {
  articles: Articles
}
export default function Body(props: ArticleProps) {
  const { articles } = props;
  const articleNames = Object.keys(articles!);

  return (
    <div className="flex flex-col gap-8 p-6 md:p-8 slide-in-from-right text-lg relative z-negative">
      <ObserveAppear>
        {articleNames.map((articleName: string) => {
          const articleInfo = articles![articleName];
          return <Article article={articleInfo} key={articleInfo.header} />;
        })}
      </ObserveAppear>
    </div>
  );
}
