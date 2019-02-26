import React          from 'react';
import { NEWS }       from '../API';
import { withRouter } from "next/router";

import Layout         from '../components/Layout';

const Post = ({ router }) => (
  <Layout>
    {
      console.log(router.query.id)
    }
  </Layout>
)

export default withRouter(Post);
