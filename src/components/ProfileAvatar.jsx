import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Avatar from "@mui/material/Avatar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const ProfileAvatar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  // const location = useLocation();
  // const { userProfile } = location.state && location.state.userProfile;
 
  const userDetails  = JSON.parse(Cookies.get("userDetails"));
  console.log(userDetails);

  const handleProfile = () => {
    setOpen(true);
  };

  const handleSignOut = async () => {
    const authToken = Cookies.get("auth");
    const response = await axios.post(
      "http://127.0.0.1:8000/rest-auth/logout/",
      {},
      {
        headers: {
          'Authorization': `Token ${authToken}`,
        },
      }
    );
    Cookies.remove("auth");
    toast.success(`${response.data.detail}!`);
    navigate("/auth/login");
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    //this method is used to listen for the "mousedown" event and execute the handleClickOutside function.
    document.addEventListener("mousedown", handleClickOutside);
    // cleanup function to clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col relative px-4">
        <Avatar onClick={handleProfile} />
        <div ref={inputRef}>
          {open && (
            <div className="h-[136px] py-2 px-2 bg-white absolute top-10 right-6 rounded-lg">
              <p className="text-slate-700">{userDetails && userDetails.full_name}</p>
              <p className="text-slate-400">{userDetails && userDetails.email}</p>
              <div className="flex flex-col text-left">
              <Link
                to="/userHistory"
                className="text-slate-600 py-3"
              >
                Diagnosis history
              </Link>
              <button onClick={handleSignOut} className="text-black text-left">
                Sign out
              </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileAvatar;
