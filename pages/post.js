import React          from 'react';
import { NEWS }       from '../API';
import { withRouter } from "next/router";

import Layout         from '../components/Layout';
import PostDetails    from '../components/PostDetails';

const Post = ({ router }) => (
  <Layout>
    <PostDetails
      post={NEWS.find((element) => element.id === +router.query.id)}
    />
  </Layout>
)

export default withRouter(Post);
