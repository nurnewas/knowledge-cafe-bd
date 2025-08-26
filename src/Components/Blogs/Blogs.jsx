import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .then((data) => console.log(data));
  });
  return (
    <div>
      <h1>Blogs</h1>
      <h3>blog: {blogs.length}</h3>
    </div>
  );
};

export default Blogs;
