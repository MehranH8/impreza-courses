import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";




function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 sm:mb-0 sm:mt-0 sm:flex-row sm:items-center sm:gap-6">
            <div

                className="p-1 text-[18px]"
            >
                <Link to="/courses" className="max-w-fit flex text-black items-center duration-300 border-b-2 border-white hover:border-mainblue hover:text-mainblue transition-colors">
                    دوره ها
                </Link>
            </div>
            <div
                className="p-1 text-[18px]"
            >
                <Link to="/about" className="max-w-fit flex text-black items-center duration-300 border-b-2 border-white hover:border-mainblue hover:text-mainblue transition-colors">
                    درباره ما
                </Link>
            </div>
            <div
                className="p-1 text-[18px]"
            >
                <Link to="/blog" className="max-w-fit flex text-black items-center duration-300 border-b-2 border-white hover:border-mainblue hover:text-mainblue transition-colors">
                    بلاگ
                </Link>
            </div>
        </ul>
    );
}

 function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 640 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className={openNav ? "mx-auto w-full px-8 md:px-12 mt-1 py-3 shadow-2xl sm:shadow-none" : "mx-auto w-full px-12 mt-1 py-3 shadow-none"}>
            <div style={{direction:"ltr"}} className="flex items-center justify-between text-blue-gray-900">
                <Link
                   to="/"
                   className="mr-4 hover:text-mainblue transition-colors font-bold duration-300 cursor-pointer py-1.5 text-[20px] my-auto"
                >
                    Impreza Courses
                </Link>
                <div className="hidden sm:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent sm:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <IoClose className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <FaBars className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}

export default NavbarSimple