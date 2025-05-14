import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import Image from "next/image";
import { navbarStyles } from "./navbar.styles";

export default function NavBar() {
    return (
        <Navbar className={navbarStyles.container}>
            <NavbarBrand className={navbarStyles.brand}>
                <div className="flex items-center">
                    <div className="mr-2 relative glow-effect">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full blur opacity-50"></div>
                        <Image 
                            src="/favicon.ico" 
                            alt="Logo" 
                            width={navbarStyles.logo.width} 
                            height={navbarStyles.logo.height}
                            className="relative rounded-full"
                        />
                    </div>
                    <span className="ml-2 text-xl font-semibold neon-text">Peck Saas</span>
                </div>
            </NavbarBrand>
            
            <NavbarContent className={navbarStyles.content}>
                <NavbarItem>
                    <a href="#" className={navbarStyles.navItem}>Solutions</a>
                </NavbarItem>
                <NavbarItem>
                    <a href="#" className={navbarStyles.navItem}>Technology</a>
                </NavbarItem>
                <NavbarItem>
                    <a href="#" className={navbarStyles.navItem}>About</a>
                </NavbarItem>
                <NavbarItem>
                    <button className="px-4 py-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-medium hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all">
                        Get Started
                    </button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
} 