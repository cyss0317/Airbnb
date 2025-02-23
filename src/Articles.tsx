import Article from "./Article";
import {  ArticlesType } from "./articles_fixture";

interface ArticlesProps {
  articles: ArticlesType;
}

const aboutThisHouse: ArticlesType = Object.freeze({
  "About this house": {
    title: "About this house",
    header: "Welcome to The Cozy Oasis",
    href: "/",
    photoPosition: "right",
    photoUrl:
      "https://i0.wp.com/jonathanfinancial.com/wp-content/uploads/2021/01/consulting-companies-cover.jpg?fit=1024%2C538&ssl=1",
    photoAlt: "About picture",
    description:
      "Welcome to The Cozy Getaway at Gated Oasis, a spacious retreat with in front of the golf course, located in a secure gated community in Kyle, TX. This beautifully designed home offers ample parking, modern comforts, and a peaceful escape while being conveniently close to local attractions. Whether you're a golf enthusiast, a family looking for a getaway, or just seeking a relaxing retreat, this home is the perfect choice.",
  },
  "House Rules": {
    title: "House Rules",
    header: "Welcome to The Cozy Oasis1",
    href: "/house_rule",
    photoPosition: "right",
    photoUrl:
      "https://i0.wp.com/jonathanfinancial.com/wp-content/uploads/2021/01/consulting-companies-cover.jpg?fit=1024%2C538&ssl=1",
    photoAlt: "About picture",
    description:
      "Welcome to your getaway to The Cozy Oasis in Kyle, TX! This spacious and stylish home is nestled in a gated community with a golf course view. Whether you're visiting for a relaxing retreat, a family gathering, or a business trip, this home offers the perfect balance of comfort and convenience.",
  },
  "Places to EAT": {
    title: "Places to EAT",
    header: "Our Services",
    href: "/places_to_eat",
    photoPosition: "left",
    photoUrl:
      "https://i0.wp.com/jonathanfinancial.com/wp-content/uploads/2021/01/crw_600h_300.jpg?fit=600%2C300&ssl=1",
    photoAlt: "Services picture",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, magni. Molestias quibusdam vitae a magnam aut, recusandae similique fuga ex dolorum soluta quas saepe vel cupiditate ratione harum aliquid architecto. Esse porro ad pariatur voluptates, minus aliquid dolorem fuga aut fugiat optio maiores aliquam officiis veniam illo libero explicabo, a in corporis suscipit. Aliquid eaque inventore amet soluta. Sit cumque, rerum officiis in corrupti, ducimus asperiores eaque eum facere veritatis error excepturi molestias aliquam modi quasi odit suscipit officia saepe. Itaque illo nobis, velit quos blanditiis quas similique fuga dolores corrupti labore facere impedit quibusdam molestiae totam esse ab culpa officia quasi asperiores pariatur, adipisci deserunt dicta? Minima delectus itaque, in nesciunt ipsum sint, enim dicta magnam eius non porro omnis nostrum modi consequuntur alias minus ratione eligendi neque, fugiat nisi nihil. Quidem placeat sunt assumenda explicabo ratione quis fugiat molestiae incidunt minus rerum impedit, beatae delectus, recusandae neque obcaecati.",
  },
});

export default function Articles(props: any) {
  const { articles } = props;
  console.log(aboutThisHouse);
  const articleNames = Object.keys(aboutThisHouse);

  return (
    <>
      {articleNames.map((articleName: string) => {
        const articleInfo = articles![articleName];
        return <Article article={articleInfo} key={articleInfo.header} />;
      })}
    </>
  );
}
