"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";
import { a } from "framer-motion/client";

function Navbar({className}: {className?: string}) {
  const [active, setActiveAction] = useState<string | null>(null);
  return(
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50", className)}
    >
      <Menu setActiveAction={setActiveAction}>
        <Link href={"/"}>
        <MenuItem setActiveAction={setActiveAction} active={active} item="Home">
        </MenuItem>
        </Link>
        <Link href={"/about"}>
        <MenuItem setActiveAction={setActiveAction} active={active} item="About Me">
        </MenuItem>
        </Link>

        <MenuItem setActiveAction={setActiveAction} active={active} item="Education">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/Primary">Primary Education</HoveredLink>
          <HoveredLink href="/secondary">Secondary Education</HoveredLink>
          <HoveredLink href="/higher">Higher Education</HoveredLink>
           </div>
        </MenuItem>

        <MenuItem setActiveAction={setActiveAction} active={active} item="Projects">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/To-do">To-do App</HoveredLink>
          <HoveredLink href="/E-commerce">E-commerce Website</HoveredLink>
          <HoveredLink href="/portfolio">Portfolio Website</HoveredLink>
          <HoveredLink href="/expenseTracker">Expense Tracker</HoveredLink>
           </div>
        </MenuItem>

        <Link href={"/contact"}>
        <MenuItem setActiveAction={setActiveAction} active={active} item="Contact Me">
        </MenuItem>
        </Link>
      </Menu>
      </div>
  )
}

export default Navbar

