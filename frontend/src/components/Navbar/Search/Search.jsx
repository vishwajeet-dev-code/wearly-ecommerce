import { Search as SearchIcon } from 'lucide-react'
import Trending from '../../LandingPage/Trending/Trending'
const Search = () => {
  return (
    <main className="mx-auto max-w-full px-10 py-6 sm:px-14 sm:py-5">
      <div className="flex h-10 items-center gap-3 border border-black px-2">
        <SearchIcon size={28} strokeWidth={1} className="shrink-0 text-black" aria-hidden="true" />
        <input
          type="search"
          aria-label="Search products"
          placeholder='Search Polo Shirts'
          className="h-full w-full bg-transparent text-sm outline-none"
          
        />
      </div>
      <Trending />
    </main>
  )
}

export default Search