"use client"
import { usePathname } from "next/navigation"
import Navbar from "./Navbar";


export default function NavbarComponent() {
    const pathname = usePathname();
    return pathname =='/' && <Navbar />
    // if (pathname !== '/register' && pathname !== '/login' && pathname !== '/user/') {
    //     return <Navbar />
    // }
    // return null;
}

 // const pathname = usePathname();
    
    // // Check if the current route is neither login nor register
    // const showNavbar = pathname !== '/login' && pathname !== '/register';
    
    // return showNavbar && <Navbar />;