import { NavLink, Outlet } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useState } from "react";

export function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    const navLinkClass = ({isActive}) => `hover:text-red-400 ${isActive ? "text-red-500 font-semibold" : "text-gray-200"}` 

    return (
        <div>
            <header className="bg-gray-900">
                <nav className="px-6 max-w-7xl mx-auto">
                    <div className="flex justify-between items-center text-white p-2">
                        <div className="text-4xl font-bold">
                            Нет<span className="text-red-500">Flix</span>
                        </div>

                        {/* asztali menü */}
                        <div className="hidden min-[550px]:flex gap-8">
                            <NavLink className={navLinkClass} to="/">Kezdőlap</NavLink>
                            <NavLink className={navLinkClass} to="/movies">Filmek</NavLink>
                            <NavLink className={navLinkClass} to="/tv">Sorozatok</NavLink>
                            <NavLink className={navLinkClass} to="/search">Keresés</NavLink>
                            <NavLink className={navLinkClass} to="/actors"> Színészek </NavLink>
                        </div>

                        {/* Hamburger */}
                        <button className="hidden max-[550px]:block text-3xl" onClick={()=>setMenuOpen(!menuOpen)}>
                            {menuOpen ? 
                                <MdClose/>:
                                <RxHamburgerMenu/>
                            }
                        </button>
                    </div>
                    {menuOpen && (
                        <div className="flex flex-col gap-8 py-4 min-[550px]:hidden">
                            <NavLink className={navLinkClass} to="/">Kezdőlap</NavLink>
                            <NavLink className={navLinkClass} to="/movies">Filmek</NavLink>
                            <NavLink className={navLinkClass} to="/tv">Sorozatok</NavLink>
                            <NavLink className={navLinkClass} to="/search">Keresés</NavLink>
                            <NavLink className={navLinkClass} to="/actors"> Színészek </NavLink>
                        </div>
                    )}
                    
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}