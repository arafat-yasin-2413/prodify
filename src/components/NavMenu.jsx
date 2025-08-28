"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={`nav text-sm font-semibold tracking-wider ${
              pathname === href ? "active-link" : ""
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavMenu;
