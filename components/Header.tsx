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
            <NavigationMenuItem className="flex gap-8 font-semibold text-black ">
              <NavigationMenu>
                <Link href="/">Home</Link>
              </NavigationMenu>
              <NavigationMenu>
                <Link href="Shop">Shop</Link>
              </NavigationMenu>
              <NavigationMenu>
                <Link href="/About">About Us</Link>
              </NavigationMenu>
              <NavigationMenu>
                <Link href="/Contact">Contact</Link>
              </NavigationMenu>
              <div className="flex gap-7 ml-200 ">
                <NavigationMenu>
                  <Link href="/cart">
                    <ShoppingCartIcon />
                  </Link>
                </NavigationMenu>
                <NavigationMenu>
                  <Link href="/User">
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
