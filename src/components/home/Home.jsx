import NavBar from "../NavBar/NavBar";
import List from "./List";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10">
      <NavBar />
      <div className="w-auto h-auto text-white flex justify-center items-center">
        <List />
      </div>
    </div>
  );
};

export default Home;
