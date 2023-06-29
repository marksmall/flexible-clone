import { FC } from 'react';

type Props = {};

const HomePage: FC<Props> = ({}) => {
  return (
    <section className="flex-start paddings mb-16">
      <p>Categories</p>
      <p>Posts</p>
      <p>Load More</p>
    </section>
  );
};

export default HomePage;
