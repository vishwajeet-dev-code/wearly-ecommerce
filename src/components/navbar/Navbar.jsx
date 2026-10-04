import { useState } from "react";
import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-[0_2px_5px_rgba(0,0,0,0.1)] bg-white">
      <div className="mx-auto flex h-20 max-w[1400px] items-center justify-center gap-8 px-6">

        {/* Logo */}
        <a
          href="/"
          className="shrink-0 text-2xl font-extrabold tracking-wide text-gray-900"
        >
          WEARLY
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-12 lg:flex">
          <a href="/category/men" className="text-sm font-bold text-gray-800 hover:text-pink-500">
            MEN
          </a>

          <a href="/category/women" className="text-sm font-bold text-gray-800 hover:text-pink-500">
            WOMEN
          </a>

          <a href="/category/kids" className="text-sm font-bold text-gray-800 hover:text-pink-500">
            KIDS
          </a>

          <a href="/category/home" className="text-sm font-bold text-gray-800 hover:text-pink-500">
            HOME
          </a>

          <a href="/category/beauty" className="text-sm font-bold text-gray-800 hover:text-pink-500">
            BEAUTY
          </a>

          <a
            href="/category/trending"
            className="relative text-sm font-bold text-gray-800 hover:text-pink-500"
          >
            TRENDING

            <span className="absolute -right-7 -top-3 text-[9px] font-bold text-pink-500">
              NEW
            </span>
          </a>
        </nav>

        {/* Search */}
        <div className="hidden h-11 min-w-2xs max-w-lg flex-1 items-center gap-3 rounded-md bg-gray-100 px-4 pr-4 lg:flex ">
          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-500 font-medium"
          />
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-6 md:flex">

          <a
            href="/profile"
            className="flex flex-col items-center gap-1 text-gray-800 hover:text-pink-500"
          >
            <UserRound size={18} />
            <span className="text-xs font-semibold">Profile</span>
          </a>

          <a
            href="/wishlist"
            className="flex flex-col items-center gap-1 text-gray-800 hover:text-pink-500"
          >
            <Heart size={18} />
            <span className="text-xs font-semibold">Wishlist</span>
          </a>

          <a
            href="/cart"
            className="relative flex flex-col items-center gap-1 text-gray-800 hover:text-pink-500"
          >
            <ShoppingBag size={18} />

            <span className="text-xs font-semibold">
              Bag
            </span>

            {/* Cart count */}
            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-pink-500 px-1 text-[9px] font-bold text-white">
              0
            </span>
          </a>

        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-auto text-gray-800 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-5 py-5 md:hidden">

          {/* Mobile Search */}
          <div className="mb-5 flex h-11 items-center gap-3 rounded-md bg-gray-100 px-4">
            <Search size={19} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col">

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

          </nav>

          {/* Mobile Actions */}
          <div className="mt-5 flex justify-around">

            <a
              href="/profile"
              className="flex flex-col items-center gap-1 text-xs font-semibold"
            >
              <UserRound size={20} />
              Profile
            </a>

            <a
              href="/wishlist"
              className="flex flex-col items-center gap-1 text-xs font-semibold"
            >
              <Heart size={20} />
              Wishlist
            </a>

            <a
              href="/cart"
              className="flex flex-col items-center gap-1 text-xs font-semibold"
            >
              <ShoppingBag size={20} />
              Bag
            </a>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;