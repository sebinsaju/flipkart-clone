import { Head } from "next/head";

export const pageTitle = (title) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
