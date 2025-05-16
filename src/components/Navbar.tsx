import Link from 'next/link';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from './theme-btn';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-background/60 sticky top-0 z-50 border-b backdrop-blur-lg shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image
          src="/logo.png"
          alt="Softlex Systems Logo"
          width={170}
          height={170}
          className="rounded-md"
        /> 
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center text-sm font-medium">
        <Link href="/" className="hover:text-blue-600 transition-colors duration-300">Home</Link>
        <Link href="/product" className="hover:text-blue-600 transition-colors">Products</Link>
        <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors duration-300">About</Link>
        <Link href="/contact" className="hover:text-blue-600 transition-colors duration-300">Contact</Link>
        <ModeToggle />
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center space-x-4">
        <ModeToggle />
        <Sheet>
          <SheetTrigger>
            <svg className="h-6 w-6 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="text-lg font-bold my-4">Softlex Menu</SheetTitle>
              <SheetDescription>
                <div className="flex flex-col gap-4 text-base">
                  <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                  <Link href="/product" className="hover:text-blue-600 transition-colors">Products</Link>
                  <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
                  <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
                  <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
