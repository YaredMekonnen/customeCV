import { Link } from "react-router-dom"
export function Navbar(){
    return(
        <>
<nav
  className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">

    <div
      className="!visible  flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContent12"
      data-te-collapse-item>

      <ul
        className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
        data-te-navbar-nav-ref>
        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <Link to="/"
            className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
            data-te-nav-link-ref
            >Home</Link>
        </li>
        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <Link to="/Projects"
            className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            data-te-nav-link-ref
            >Projects</Link>
        </li>
        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <Link to="/Hireme"
            className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"

            data-te-nav-link-ref
            >HireMe</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}