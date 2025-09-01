import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div>
      <header className="flex justify-between p-4 mx-4">
        <h1>Knowledge Cafe BD</h1>
        <img src={profile} alt="" />
      </header>
      <hr className="bg-blue-400" />
    </div>
  );
};

export default Header;
