const Blog = ({ blogs }) => {
  const { author, authorImg, title, postDate, readingTime, cover } = blogs;
  return (
    <div>
      <img src={cover} alt="" />
      <h1>Post title: {title}</h1>
      <p>✍️ Author: {author}</p>
      <img src={authorImg} alt={author} width="80" />
      <p>
        📅 {postDate} | ⏱ {readingTime}
      </p>
    </div>
  );
};

export default Blog;
