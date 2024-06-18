import { getAuth,signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import QuizBtn from "./BtnQuix";
import { useEffect } from "react";import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";


function Navbar() {
  const auth = getAuth();
  const {user} = useAuthContext();
  const LogoutBtn = () => {
    let ready = confirm("Do you want to Logout!");
    if (ready) {
      signOut(auth)
        .then(() => {
          toast.success("Sign out successfully!");
        })
        .catch((error) => {
          toast.error("Problem in Signing out");
        });
    } else {
      toast.success("Glad! You change your mind!");
    }
  };
  
  return (
    <>
      <nav className="flex justify-center bg-[#043872] text-white p-3">
        <div className="w-[85%] flex justify-between items-center px-5">
          <NavLink to={"/"}>
            <h1 className="text-xl font-bold uppercase font-serif headnav">
              Compass
            </h1>
          </NavLink>
          <div className="flex items-center gap-10">
            <ul className="flex gap-5">
              <li className="hover:underline cursor-pointer">Resources</li>
              <li className="hover:underline cursor-pointer">Blog</li>
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
            <div className="flex gap-3">
              {auth.currentUser && auth.currentUser.displayName  ? (
                (<button className="text-sm px-5 py-2 hover:scale-105 rounded-md bg-red-500 text-white" onClick={LogoutBtn}>
                    Log Out
                  </button>)
              ) : (
                <NavLink to={"/login"}>
                  <button className="text-sm px-5 py-2 hover:scale-105 rounded-md bg-[#ffe591] text-black">
                    Sign Up
                  </button>
                </NavLink>
              )}
              <QuizBtn />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
