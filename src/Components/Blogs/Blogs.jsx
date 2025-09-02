import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  });
  return (
    <div className="md:w-8/12">
      <h1>Blogs</h1>
      <img src="" alt="" />
      <h3>blog: {blogs.length}</h3>
      {blogs.map((blogs, index) => (
        <Blog key={index} blogs={blogs}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
