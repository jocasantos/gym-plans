"use client";

import { navLinks } from "@/constants";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/home" className="sidebar-logo pl-2">
          <Image src="/1.png" alt="logo" width={180} height={28} />
        </Link>
        <nav className="sidebar-nav">
          <ul className="sidebar-nav_elements">
            {navLinks.slice(0, 4).map((link) => {
              const isActive = link.route === pathname;

              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group ${
                    isActive ? "bg-neutral-800 text-white" : "text-neutral-900"
                  }`}
                >
                  <Link className="sidebar-link" href={link.route}>
                    <Image
                      src={
                        isActive
                          ? link.icon2 ?? "/default-icon2.png"
                          : link.icon ?? "/default-icon.png"
                      }
                      alt="logo"
                      width={24}
                      height={24}
                      className={`${isActive && "brightness-200"}`}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="sidebar-nav_elements">
            {navLinks.slice(4).map((link) => {
              const isActive = link.route === pathname;

              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group ${
                    isActive ? "bg-neutral-800 text-white" : "text-neutral-900"
                  }`}
                >
                  <Link className="sidebar-link" href={link.route}>
                    <Image
                      src={
                        isActive
                          ? link.icon2 ?? "/default-icon2.png"
                          : link.icon ?? "/default-icon.png"
                      }
                      alt="logo"
                      width={24}
                      height={24}
                      className={`${isActive && "brightness-200"}`}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="flex-center cursor-pointer gap-2 px-2 py-4">
              <UserButton afterSignOutUrl="/" showName />
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
