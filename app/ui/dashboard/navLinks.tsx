"use client";
import { MdOutlineAccessTime } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home",
    href: "/adminDashboard",
    icon: AiOutlineHome,
  },
  {
    name: "Scheduled Posts",
    href: "/adminDashboard/scheduled-posts",
    icon: MdOutlineAccessTime,
  },
  {
    name: "Create New Post",
    href: "/adminDashboard/new-post",
    icon: IoNewspaperOutline,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-gray-700 md:flex-none md:justify-start md:p-2 md:px-3
            ${pathname === link.href ? "bg-gray-700 text-white" : ""}
            `}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
