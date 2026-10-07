import { useState } from "react";
import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(0,0,0,0.1)] bg-white">
      <div className="mx-auto grid h-22 max-w-full grid-cols-[1fr_auto_1fr] items-center sm:px-12">
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="justify-self-start text-gray-800 cursor-pointer"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
        >
          {isMenuOpen ? <X strokeWidth={1.1} size={28} /> : <Menu strokeWidth={1} size={28} />}
        </button>

        <a
          href="/"
          className="shrink-0 text-3xl font-bold tracking-widest text-gray-900"
        >
          WEARLY
        </a>

        <div className="flex items-center justify-self-end text-gray-800 sm:gap-6">
          <Link
          to="/search"
            className="cursor-pointer"
          >
            <Search strokeWidth={1.1} size={28} />
          </Link>

          <a
            href="/cart"
            className="relative cursor-pointer"
            aria-label="Bag"
          >
            <ShoppingBag strokeWidth={1.1} size={28} />
            
          </a>

          <a
            href="/wishlist"
            className="cursor-pointer"
            aria-label="Wishlist"
          >
            <Heart strokeWidth={1.1} size={28} />
          </a>

          <Link
            to="/login"
            className="cursor-pointer"
            aria-label="Profile"
          >
            <UserRound strokeWidth={1.1} size={28} />
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="navbar-menu"
          className="border-t border-gray-200 bg-white px-5 py-2"
        >
          <div className="mx-auto flex max-w-[1400px] flex-col">
            <a
              href="/category/men"
              className="border-b border-gray-100 py-4 text-sm font-semibold"
            >
              Men
            </a>

            <a
              href="/category/women"
              className="border-b border-gray-100 py-4 text-sm font-semibold"
            >
              Women
            </a>

            <a
              href="/category/kids"
              className="border-b border-gray-100 py-4 text-sm font-semibold"
            >
              Kids
            </a>

            <a
              href="/category/home"
              className="border-b border-gray-100 py-4 text-sm font-semibold"
            >
              Home
            </a>

            <a
              href="/category/beauty"
              className="border-b border-gray-100 py-4 text-sm font-semibold"
            >
              Beauty
            </a>

            <a
              href="/category/trending"
              className="border-b border-gray-100 py-4 text-sm font-semibold"
            >
              Trending
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;