import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="h-auto w-1/4 bg-slate-800 rounded-lg p-2">
        <div className="gap-2 h-full w-full bg-slate-900 flex flex-col justify-between items-center text-white font-semibold rounded-lg px-3 py-1">
          <div className="h-2/3 w-full flex flex-col justify-around items-center gap-5">
            <h1 className="text-4xl m-1">Sing up!</h1>
            <input
              type="text"
              placeholder="Nick"
              className="w-full text-lg text-black px-3 py-1 rounded-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full text-lg text-black px-3 py-1 rounded-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full text-lg text-black px-3 py-1 rounded-full"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full text-lg text-black px-3 py-1 rounded-full"
            />
          </div>
          <div className="h-1/3 w-full flex flex-col justify-evenly items-center gap-4">
            <button className="mt-3 bg-white text-black rounded-full px-2 py-1 text-lg">Confirm</button>
            <Link name="linkToLogin" to="/login" className="mb-3">
              Have an account? Sing in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
