import React    from 'react';
import { NEWS } from '../API';

import NewsCard from '../components/NewsCard';
import Layout   from '../components/Layout';

const HomePage = () => (
  <Layout>
    <h2 className="h1-responsive font-weight-bold text-center my-5">Recent posts</h2>
    <p className="text-center w-responsive mx-auto mb-5">
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit
    anim id est laborum.
    </p>
    {NEWS.map(n =>
      <NewsCard
        key={n.id}
        id={n.id}
        title={n.title}
        photo={n.photo}
        desc={n.desc}
        date={n.date}
      />
    )}
  </Layout>
)

export default HomePage;
