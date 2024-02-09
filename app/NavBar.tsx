'use client'
import {   usePathname, useRouter } from 'next/navigation'

import { signOut } from './libs/auth';
import Link from 'next/link';
import { useContext } from 'react';
import { PocketBaseContext } from './libs/context';
export default function NavBar() {
  const {client} = useContext(PocketBaseContext)
  
  const pathName = usePathname()
  const router = useRouter()
  const handleLogOut = () => {
  signOut(client!)
  router.push('/signin')
  }

  const linkClass = (path:string) => {
    
    return `font-medium md:py-6 ${pathName === path ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'}`;
  };

  const noNavBar = ['/signin', '/signup', '/']

  return (

    <div>
      {noNavBar.includes(pathName) ? null :
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
  <nav className="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700" aria-label="Global">
    <div className="flex items-center justify-between">
      <Link className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">InterUrban</Link>
      <div className="md:hidden">
        <button type="button" className="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
          <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
      <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
        <Link className={linkClass("/")} href="/" aria-current="page">Welcome</Link>
        <Link  className={linkClass("/shipments")} href="/shipments">Shipments</Link>
        <Link className={linkClass("/about-us")} href="/about-us">About Us</Link>
        <Link className={linkClass("/contact-us")} href="/contact-us">Contact Us</Link>
        <Link className={linkClass("/profile")} href="/profile">My Account</Link>

        <button onClick={(e) => handleLogOut()} className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-red-600 md:border-s md:border-gray-300 md:my-6 md:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-red-500" >
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Log Out
        </button>
      </div>
    </div>
  </nav>
</header>
}
    </div>
  )
}
