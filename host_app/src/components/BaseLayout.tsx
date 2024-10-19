import Header from "./Header";
import { Outlet } from "react-router-dom";
import SideNavbar from "./SideNavbar";

const BaseLayout = () => {
    return (
        <div>
            <Header />

            <div className="flex h-[calc(100vh-5rem)]">
                <SideNavbar />

                <div className="w-full p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default BaseLayout;
