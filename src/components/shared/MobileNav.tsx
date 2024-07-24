"use client";

import { navLinks } from "@/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/home" className="flex items-center gap-2 md:py-2">
        <Image src="/1.png" alt="logo" width={180} height={28} />
      </Link>
      <nav className="flex gap-2">
        <UserButton afterSignOutUrl="/" />
        <Sheet>
          <SheetTrigger>
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lbnUiPjxsaW5lIHgxPSI0IiB4Mj0iMjAiIHkxPSIxMiIgeTI9IjEyIi8+PGxpbmUgeDE9IjQiIHgyPSIyMCIgeTE9IjYiIHkyPSI2Ii8+PGxpbmUgeDE9IjQiIHgyPSIyMCIgeTE9IjE4IiB5Mj0iMTgiLz48L3N2Zz4="
              alt="menu"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="sheet-content sm:w-64">
            <>
              <Image src="/1.png" alt="logo" width={152} height={23} />
              <ul className="header-nav_elements">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;

                  return (
                    <li
                      key={link.route}
                      className={`${
                        isActive && "gradient-text"
                      } p-18 flex whitespace-nowrap text-neutral-300
                    `}
                    >
                      <Link
                        className="sidebar-link cursor-pointer"
                        href={link.route}
                      >
                        <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default MobileNav;
