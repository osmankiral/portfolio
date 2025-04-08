import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { menuItems } from "./Header";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle></SheetTitle>
          <hr className="mt-8" />
          <div className="mt-8 px-5 flex flex-col gap-4">
            {menuItems.map((item) => (
              <div key={item.id}>
                <Link className="hover:text-amber-500 ml-4" href={item.href}>
                  {item.label}
                </Link>
                <hr className="mt-4" />
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileMenu;
