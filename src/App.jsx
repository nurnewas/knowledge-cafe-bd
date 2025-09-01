import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="main-container md:flex gap-2 mx-4">
        <Blogs />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
