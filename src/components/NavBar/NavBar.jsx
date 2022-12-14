import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";

const NavBar = () => {
  return (
    <nav className="text-white flex justify-between p-2 bg-slate-900 rounded-b-lg items-center font-semibold">
      <Link className="text-3xl rounded-full hover:bg-slate-800 p-2 ml-2">
        <GoHome />
      </Link>
      <input
        type="text"
        placeholder="Browse"
        className="rounded-xl px-2 text-black w-1/4 bg-slate-200 placeholder:text-gray-500"
      />
      <Link to="/create-task" className="bg-emerald-400 text-black px-2 py-1 rounded-md hover:bg-emerald-300">
        New Task
      </Link>
      <div className="flex gap-6 mr-4 items-center">
        <Link className="bg-emerald-400 text-black px-2 py-1 rounded-md hover:bg-emerald-300">
          Sing in
        </Link>
        <Link className="bg-emerald-400 text-black px-2 py-1 rounded-md hover:bg-emerald-300">
          Sing up
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
