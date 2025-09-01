const Blog = ({ blogs }) => {
  const { author, authorImg, title, postDate, readingTime, cover, hashtags } =
    blogs;
  return (
    <div>
      <img src={cover} alt="" />
      <div className="flex justify-between">
        <div>
          <div className="flex gap-4 mt-2 ">
            <img
              src={authorImg}
              alt={author}
              className=" mt-1 w-14 rounded-tr-4xl  rounded-bl-3xl rounded-tl-2xl"
            />
            <div className="mt-2 ">
              <h2 className="text-2xl">Author: {author}</h2>

              <p>{postDate} </p>
            </div>
          </div>
        </div>
        <div>
          <span>📅| ⏱ {readingTime}</span>
        </div>
      </div>
      <h1>Post title: {title}</h1>
      {hashtags.map((hash, index) => (
        <span key={index} className="text-blue-600 mr-2">
          <a href=""># {hashtags}</a>
        </span>
      ))}
    </div>
  );
};

export default Blog;
