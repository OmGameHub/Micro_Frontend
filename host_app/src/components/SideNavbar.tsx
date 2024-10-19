import { classNames } from "@/utils/helper";
import { Link, useLocation } from "react-router-dom";

const SideNavbar = () => {
  const { pathname } = useLocation();

  const navOptions = [
    {
      name: "Counter",
      link: "/counter",
    },
    {
      name: "Random Number",
      link: "/random-number",
    },
    {
      name: "Random Color",
      link: "/random-color",
    },

  ];

  return (
    <aside
      className="w-64 transition-transform -translate-x-full sm:translate-x-0"
      aria-label="SideNavbar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-[#242424]">
        <ul className="space-y-2 font-medium">
          {navOptions.map((navOption) => (
            <li key={navOption.name}>
              <Link
                to={navOption.link}
                className={classNames(
                  "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#121212]",
                  pathname === navOption.link
                    ? "bg-gray-100 dark:bg-[#121212]"
                    : ""
                )}
              >
                <span className="ms-3">{navOption.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideNavbar;
