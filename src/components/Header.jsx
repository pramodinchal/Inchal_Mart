import React, { useState } from "react";
import { motion } from "framer-motion";
import { TiShoppingCart} from "react-icons/ti";
import {MdOutlineAdd, MdLogout} from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


import Logo from "../img/mLogo.png";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue() 
  const [isMenu, setIsMenu] = useState(false);

  const login= async () =>{
    if(!user){
      const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth,provider)
      dispatch({
       type : actionType.SET_USER,
       user: providerData[0],
      })
      localStorage.setItem("user",JSON.stringify(providerData[0]));
   }else{
    setIsMenu(!isMenu)
   }
    }
  return (
    <header className="fixed z-50 w-screen  p-1 px-5 ">
      {/* Desktop & Tablet*/}
      <div className=" flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-14 object-cover" alt="Logo" />
          <p className="text-red-500 text-HeadingColor text-xl font-extrabold">
            <span className=" text-red-700 text-4xl font-serif">I</span>NCHAl{" "}
            <span className="text-red-700 text-4xl font-serif"> M</span>ART
          </p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul initial={{opacity: 0, x: 200}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: 200}}
           className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </motion.ul>

          <div className=" relative flex items-center justify-center">
            <TiShoppingCart className="ml-5 cursor-pointer" />

            <div className="absolute -top-2 -right-4 w-5 h-5  rounded-full bg-red-500 flex items-center justify-center">
              <p className="text-xs text-white font-semibold">5</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: "0.6" }}
              src={user ? user.photoURL : Avatar}
              className="w-8 min-w-[32px] h-8 min-h-[32px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            />
           {
            isMenu && (
              <motion.div 
              initial={{opacity: 0, scale: 0.6}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0, scale: 0.6}}
               className="w-36 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 ">
           {
            user && user.email === "inchalpramod@gmail.com" && (
             <Link to={'./createitem'}>
             <p className="px-2 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out">Add Item<MdOutlineAdd style={{display: "inline",marginLeft: "15px"}} /></p>
             </Link>
            )
           }
             <p className="px-2 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out">Logout<MdLogout style={{display: "inline",marginLeft: "35px"}}/></p>
           </motion.div>
            )
           }
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden w-full h-full">
         <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-14 object-cover" alt="Logo" />
          <p className="text-red-500 text-HeadingColor text-xl font-extrabold">
            <span className=" text-red-700 text-4xl font-serif">I</span>NCHAl{" "}
            <span className="text-red-700 text-4xl font-serif"> M</span>ART
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;

