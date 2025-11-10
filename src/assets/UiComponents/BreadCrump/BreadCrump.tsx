import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export interface BreadcrumbItem {
  path: string;
  text: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const location = useLocation();

  return (
    <nav className="text-sm text-gray-600 dark:text-gray-300">
      <ol className="flex flex-wrap items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isActive = location.pathname === item.path;

          return (
            <li key={item.path} className="flex items-center">
              {!isLast ? (
                <>
                  <Link
                    to={item.path}
                    className={`transition-colors duration-200 hover:text-primary ${
                      isActive
                        ? "text-primary font-medium underline underline-offset-4"
                        : "text-gray-600 dark:text-neutral-300"
                    }`}
                  >
                    {item.text}
                  </Link>
                  <FaChevronRight className="ml-2 text-gray-400 dark:text-neutral-300" />
                </>
              ) : (
                <span
                  className={`${
                    isActive
                      ? "text-primary font-medium underline underline-offset-4"
                      : "text-gray-600 dark:text-neutral-300"
                  }`}
                >
                  {item.text}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
