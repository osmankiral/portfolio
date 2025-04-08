import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import MobileMenu from "./MobileMenu";

export const menuItems = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About Me", href: "#about" },
  { id: 3, label: "Services", href: "#services" },
  { id: 4, label: "Projects", href: "#projects" },
  { id: 5, label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-background fixed top-0 left-0 border z-50">
        <div className="max-w-6xl mx-auto py-4 px-4 flex items-center justify-between">
          <div className="font-bold text-xl cursor-pointer">
            MY <span className="text-amber-500">PORTFOLIO</span>
          </div>
          <nav className="hidden md:flex space-x-6 font-medium">
            {menuItems.map((item) => (
              <Link className="hover:text-amber-500" key={item.id} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="hidden md:flex bg-amber-500 hover:bg-amber-600 cursor-pointer text-white">
              Download CV
            </Button>
            <ModeToggle />
           <MobileMenu/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
