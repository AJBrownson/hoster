'use client'
import { MdOutlineAccessTime } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/adminDashboard', icon: AiOutlineHome },
  {
    name: 'Campaign',
    href: '/adminDashboard/campaign',
    icon: MdOutlineAccessTime,
  },
  { name: 'Create', href: '/adminDashboard/create', icon: FaPen },
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
            ${pathname === link.href ? 'bg-gray-700 text-white' : ''}
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