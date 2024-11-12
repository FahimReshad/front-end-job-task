import { useEffect } from "react";
import Button from "./shared/button";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  useEffect(() => {
    const toggleOpen = document.getElementById("toggleOpen");
    const toggleClose = document.getElementById("toggleClose");
    const collapseMenu = document.getElementById("collapseMenu");
    // toggling function:
    function handleClick() {
      if (collapseMenu.style.display === "block") {
        collapseMenu.style.display = "none";
      } else {
        collapseMenu.style.display = "block";
      }
    }
    // Only add event listeners if elements are found:
    toggleOpen?.addEventListener("click", handleClick);
    toggleClose?.addEventListener("click", handleClick);
    // Cleanup function to remove event listeners when component unmounts:
    return () => {
      toggleOpen?.removeEventListener("click", handleClick);
      toggleClose?.removeEventListener("click", handleClick);
    };
  }, []);

  const navLinks = [
    {
      title: "Home",
      pathName: "/",
    },
    {
      title: "About",
      pathName: "/",
    },
    {
      title: "Portfolio",
      pathName: "/",
    },
    {
      title: "Clients",
      pathName: "/",
    },
    {
      title: "Blog",
      pathName: "/",
    },
    {
      title: "Contact",
      pathName: "/",
    },
  ];
  return (
    <header className=" py-4 px-4 sm:px-10 bg-gradient-red tracking-wide relative z-50">
      <div className="max-w-7xl w-full mx-auto flex flex-wrap items-center gap-4">
        {/* logo & name */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <span className="text-4xl text-white">Restaurant</span>
        </Link>
        {/* toggle menubar for md and mobile devices */}
        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-gradient-red p-3"
          >
            <IoMdClose className="text-3xl" />
          </button>
          {/* route path */}
          <ul className="lg:flex lg:ml-12 lg:gap-x-6 max-lg:space-y-3 max-lg:fixed max-lg:bg-[#BD1F17] max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="max-lg:border-b max-lg:pb-4 px-3 lg:hidden">
              {/* logo & name */}
              <Link href="/" className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-8 h-8" />
                <span className="text-3xl text-white">Restaurant</span>
              </Link>
            </li>
            {navLinks.map((navLink, index) => (
              <li key={index} className="max-lg:border-b max-lg:py-3 px-3">
                <Link
                  to={navLink?.pathName}
                  className="text-white block font-bold transition-all"
                >
                  {navLink?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex ml-auto">
          {/* navbar right-side button */}
          <div className="hidden lg:block">
            <Button text={"Book a table"} />
          </div>
          <button id="toggleOpen" className="lg:hidden ml-7 text-white">
            <AiOutlineMenu className="text-3xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
