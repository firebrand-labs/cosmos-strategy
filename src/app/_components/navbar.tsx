"use client"

import { FC } from "react"
import Link from "next/link"
import Image from "next/image"
import { Icons } from "@/app/_components/icons"
import { MainNavItems } from "@/types"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/app/_components/ui/navigation-menu"

interface NavbarProps {
  items: MainNavItems
}

const Navbar: FC<NavbarProps> = ({ items }) => {
  return (
    <div className="sm:flex relative flex-row items-center justify-between gap-8 py-4 px-10 border-b">
      <Link
        href="/"
        className="flex z-40 font-semibold items-center justify-center flex-nowrap gap-2"
      >
        <Image
          height={100}
          width={200}
          src={
            "https://utfs.io/f/ZowmNmBHF7rV4k9DHq58tCRcZbLox5S9hfdI037uwUEjeQWF"
          }
          alt="Logo"
        />
      </Link>
      {items?.length ? (
        <nav className="hidden md:flex items-center justify-center gap-8 flex-row">
          {items.map((item, index) => (
            <NavigationMenu
              key={index}
              orientation="vertical"
              className="static"
            >
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="static">
                    <Link
                      key={index}
                      href={item.disabled ? "#" : item.href}
                      className={cn(
                        "inline-flex items-center text-foreground flex-row justify-center group-hover:text-primary-foreground text-sm font-medium font-paragraph",
                        {
                          "cursor-not-allowed text-foreground/50":
                            item.disabled,
                        }
                      )}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuTrigger>

                  {item?.subItems.length ? (
                    <NavigationMenuContent className="bg-slate-50 w-screen mt-0">
                      <ul className="flex items-center justify-end w-screen gap-4 px-4 py-6">
                        {item.subItems.map((subItem, i) => (
                          <li
                            key={i}
                            className="flex items-center justify-center"
                          >
                            <Link
                              className={cn(
                                "inline-flex items-center text-black flex-row justify-center group-hover:text-primary-foreground text-sm font-medium font-paragraph",
                                {
                                  "cursor-not-allowed text-foreground/50":
                                    item.disabled,
                                }
                              )}
                              href={subItem.href}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  ) : null}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ))}
        </nav>
      ) : null}
    </div>
  )
}

export default Navbar
