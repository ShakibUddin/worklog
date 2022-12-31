import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout/Layout";

type Props = {};

export default function About({}: Props) {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div>about page</div>
    </Layout>
  );
}
