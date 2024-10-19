import reactLogo from "@/assets/react.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="h-20 w-full flex items-center justify-center border-b border-gray-200 bg-gray-50 dark:bg-[#242424]">
            <Link to="/" className="flex items-center justify-center">
                <img
                    src={reactLogo}
                    className="cursor-pointer logo h-20"
                    alt="React Logo"
                />

                <h1 className="text-3xl font-medium dark:text-white">Host App</h1>
            </Link>
        </div>
    );
};

export default Header;
