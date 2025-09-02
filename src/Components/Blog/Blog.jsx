import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as faSolidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faRegularBookmark } from "@fortawesome/free-regular-svg-icons";
const Blog = ({ blogs }) => {
  const { author, authorImg, title, postDate, readingTime, cover, hashtags } =
    blogs;
  return (
    <div className="mb-20">
      <img className="w-full" src={cover} alt="" />
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
          {/* Solid (filled) */}
          <FontAwesomeIcon icon={faSolidBookmark} />

          {/* Regular (outline) */}
          <FontAwesomeIcon icon={faRegularBookmark} />
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
