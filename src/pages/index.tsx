import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="container mx-auto max-w-screen-lg bg-red-700 px-5">
      <p className="text-white py-5">Hello World!</p>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
