import React, { useContext } from "react";
import {
  FaCreditCard,
  FaChevronRight,
  FaMoon,
  FaUser,
  FaCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import CreditContext from "../contexts/CreditContext";

const Profile = () => {
  const { credits } = useContext(CreditContext);
  const { user } = useUser();
  const firstName = user ? user.firstName : "";
  const lastName = user ? user.lastName || "" : "";
  const fullName = `${firstName} ${lastName}`.trim() || "User";

  return (
    <div className="flex justify-center py-10  dark:bg-[#0f172a]">
      <div className="w-full max-w-3xl bg-blue-100 rounded-lg shadow-lg p-6 dark:bg-[#1e293b] dark:text-white">
        <div className="flex justify-center mt-6">
          {user && user.imageUrl ? (
            <img
              className="w-24 h-24 rounded-full border-4 border-white -mt-12"
              src={user.imageUrl}
              alt="Profile"
            />
          ) : (
            <div className="w-24 h-24 rounded-full border-4 border-white -mt-12 bg-gray-300" />
          )}
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold dark:text-[#ffb39f]">
            {fullName}
          </h2>
        </div>
        <div className="px-6 mt-4">
          {/* <div className="flex items-center justify-between py-2">
            <span className="font-semibold  dark:text-[#5BD1D7]">Phone :</span>
            <span>+5999-661-6161</span>
          </div> */}
          <div className="flex items-center justify-between py-2 ">
            <span className="font-semibold mr-2  dark:text-[#5BD1D7]">
              Email :
            </span>
            <span>
              {user && user.emailAddresses
                ? user.emailAddresses[0].emailAddress
                : ""}
            </span>
          </div>
        </div>
        <div className="px-6 mt-6">
          <div className="flex items-center justify-between py-2 border-t">
            <span className="flex items-center  dark:text-[#5BD1D7]">
              <FaCreditCard className="mr-2" /> Cards
            </span>
            <Link to="/cards">
              <FaChevronRight />
            </Link>
          </div>
          <div className="flex items-center justify-between py-2 border-t">
            <span className="flex items-center  dark:text-[#5BD1D7]">
              <FaUser className="mr-2" /> Credit details
            </span>
            <Link to="/profile-details">
              <FaChevronRight />
            </Link>
          </div>
          <div className="flex items-center justify-between py-2 border-t">
            <span className="flex items-center  dark:text-[#5BD1D7]">
              <FaCog className="mr-2" /> Settings
            </span>
            <Link to="/settings">
              <FaChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
