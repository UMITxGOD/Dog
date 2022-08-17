import { useState } from "react";

import styles from "../styles/blog.module.css";
import Link from "next/link";
import * as fs from "fs";
/*
step 1: collect all the files from blogdata directory (read) "http://localhost:3000/api/blog"
step 2: Iterate through them and Display them
*/
const Blogs = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  return (
    <div className={styles.blogs}>
      <main className={styles.main}>
        <h2>Latest Dog Health Care</h2>
        {blogs.map((blog) => (
          <div className={styles.blogItem} key={blog.title}>
            <Link href={`/blogpost/${blog.slug}`}>
              <h3>{blog.title}</h3>
            </Link>
            <hr />
            <p>{blog.content.slice(0, 150)}...</p>
            <h6>
              <i>{blog.author}</i>
            </h6>
          </div>
        ))}
      </main>
    </div>
  );
};
export async function getStaticProps(context) {
  let allBlogs = [];

  let directory = await fs.promises.readdir(`blogdata`);
  let myfile;
  for (let counter = 0; counter < directory.length; counter++) {
    myfile = await fs.promises.readFile(`blogdata/${directory[counter]}`, {
      encoding: "utf-8",
    });
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: { allBlogs },
  };
}
export default Blogs;

// export async function getServerSideProps(context) {
//   const data = await fetch("http://localhost:3000/api/blog");
//   const allBlogs = await data.json();
//   return {
//     props: { allBlogs },
//   };
// }
