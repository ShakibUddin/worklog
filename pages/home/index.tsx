import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout/Layout";

type Props = {};

export default function Home({}: Props) {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <div>Home page</div>
    </Layout>
  );
}
