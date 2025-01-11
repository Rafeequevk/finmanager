import React from "react";
import { Link } from "react-router-dom";

import {
  useUser,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  const { user } = useUser();
  return (
    <div className="mx-auto max-w py-3 px-2 sm:px-6 lg:px-8 bg-gray-800 flex justify-between items-center">
      <div className="text-4xl text-white">FINMANAGER</div>
      <ul className="flex gap-11 items-center text-white  ">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/budget" className="hover:underline">
            Budget
          </Link>
        </li>

        <li>
          <Link to="/expense" className="hover:underline">
            Expense
          </Link>
        </li>

        <li>
          <Link to="/income" className="hover:underline">
            Income
          </Link>
        </li>
      </ul>
      <div className="flex justify-evenly  items-center gap-3">
        {/* Signed-Out View */}
        <SignedOut>
          <SignInButton>
            <button className="text-white bg-green-600 px-3 py-1 rounded-md">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center gap-3">
            {/* User's Profile Picture */}
            {/* {user && (
          <a href="/profile" title="Go to profile">
            <img
              src={user.profileImageUrl}
              alt="User Profile"
              className="rounded-full w-10 h-10 border border-white"
            />
          </a>
        )} */}
            {/* Logout Button */}

            <UserButton userProfileMode="navigation" />
          </div>
        </SignedIn>

        {/* 
<SignInButton className="text-white bg-green-600 px-3 py-1 rounded-md" />

<FaUserCircle  className='text-white text-3xl'/> */}
      </div>
    </div>
  );
};

export default Header;
