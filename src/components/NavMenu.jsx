"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/allProducts", label: "All Products" },
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
            className={`nav text-base font-semibold tracking-wider ${
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
