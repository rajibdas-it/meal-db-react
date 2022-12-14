import React from "react";
import user from "./rajib.jpeg";
import logo from "./logo.png";

const Header = (props) => {
  const { setSearch } = props;
  return (
    <div className="navbar bg-slate-800 shadow-lg">
      <div className="flex-1">
        <a
          href="/"
          className="btn btn-ghost normal-case text-xl bg-slate-600 md:ml-10"
        >
          <img className="w-[100%] h-[100%]" src={logo} alt="" />
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user} alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/" className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a href="/">Settings</a>
            </li>
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
