import Link from "next/link";
import { BsChevronCompactRight } from "react-icons/bs";

const BreadcrumbMenu = ({breadcrumb}) => {
  


  return (
    <div className="mt-8 mb-6 px-4 sm:px-0">
      <div className="flex">
        <Link
          className="font-light text-sm text-coBlue hover:text-blue-800"
          href="/"
        >
          Home
        </Link>
        {breadcrumb && (
          <>
            <div className="grid place-items-center">
              <BsChevronCompactRight className="text-coBlue text-sm w-6" />
            </div>
            <Link
              className="font-light text-sm text-coBlue hover:text-blue-800"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default BreadcrumbMenu;
