import { useState } from "react";
import * as fs from "fs";
import styles from "../../styles/blogpost.module.css";
//Step 1 : Find the file corresponding to that slug  `http://localhost:3000/api/getBlog?slug=${context.query.slug}`
//Step 2 : Populate them inside the page
const Slug = (props) => {
  const [blogs, setBlogs] = useState(props.parsed);
  return (
    <div className={styles.container}>
      <h2>{blogs.title}</h2>
      <hr />
      <p>{blogs.content}...</p>
      <hr />
      <address>{blogs.author}</address>
    </div>
  );
};
export async function getStaticPaths(context) {
  return {
    paths: [
      {
        params: { slug: "feed-afghan-hound" },
      },
      {
        params: { slug: "feed-pit-bull" },
      },
      {
        params: { slug: "feed-pug" },
      },
    ],
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  let parsed = await fs.promises.readFile(
    `blogdata/${context.params.slug}.json`,
    {
      encoding: "utf-8",
    }
  );
  parsed = JSON.parse(parsed);
  return {
    props: { parsed },
  };
}
export default Slug;

// export async function getServerSideProps(context) {
//   const data = await fetch(
//     `http://localhost:3000/api/getBlog?slug=${context.query.slug}`
//   );
//   const parsed = await data.json();
//   return {
//     props: { parsed },
//   };
// }
