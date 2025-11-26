import Link from "next/link";
import { UserIcon } from "lucide-react";
import { ShoppingCartIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import React from "react";

const Header = () => {
  return (
    <div>
      <div className=" flex-start p-5 bg-white ">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="flex gap-6 font-semibold text-black ml-5">
              <NavigationMenu>
                <Link
                  href="/"
                  className="text-black hover:bg-gray-200  rounded-2xl p-2 "
                >
                  Home
                </Link>
              </NavigationMenu>
              <NavigationMenu className="text-black hover:bg-gray-200  rounded-2xl p-2">
                <Link href="Shop">Shop</Link>
              </NavigationMenu>
              <NavigationMenu>
                <Link
                  href="/About"
                  className="text-black hover:bg-gray-200  rounded-2xl p-2"
                >
                  About
                </Link>
              </NavigationMenu>
              <NavigationMenu>
                <Link
                  href="/Contact"
                  className="text-black hover:bg-gray-200  rounded-2xl p-2 "
                >
                  Contact
                </Link>
              </NavigationMenu>
              <div className="flex gap-7 ml-200 ">
                <NavigationMenu>
                  <Link
                    href="/cart"
                    className="text-black hover:bg-gray-200  rounded-2xl p-2"
                  >
                    <ShoppingCartIcon />
                  </Link>
                </NavigationMenu>
                <NavigationMenu>
                  <Link
                    href="/User"
                    className="text-black hover:bg-gray-200  rounded-2xl p-2"
                  >
                    <UserIcon />
                  </Link>
                </NavigationMenu>
              </div>

              <NavigationMenu></NavigationMenu>

              <NavigationMenuContent></NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Header;
