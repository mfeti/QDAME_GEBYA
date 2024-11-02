import { FaSearch } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "../ui/DarkMode";
function Navbar() {
  return (
    <div className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper section  */}
      <div className="bg-primary/40">
        <div className="container py-2 flex justify-between items-center">
          {/* logo section  */}
          <div className="">
            <a href="" className="flex items-center gap-2">
              <img src={Logo} alt="logo" className="w-10 h-10" />
              <span className="font-bold sm:text-2xl text-xl">Qdame Gebya</span>
            </a>
          </div>
          {/* 🔍 section  */}
          <div className="flex justify-between items-center gap-3">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search..."
                className="sm:w-[200px] border border-gray-300 rounded-full px-2 py-1 group-hover:w-[300px] focus:outline-none focus:border focus:border-primary transition-all duration-300"
              />
              <FaSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* order button  */}
            <button
              onClick={() => {}}
              className="bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-white transition-all duration-300 flex gap-2 items-center group"
            >
              <span className="hidden group-hover:block transition-all duration-300">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-md" />
            </button>
            {/* Dark mode switch */}
            <div className="">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower section  */}
      <div className=""></div>
    </div>
  );
}

export default Navbar;
