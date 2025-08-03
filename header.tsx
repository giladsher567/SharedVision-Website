import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import MobileMenu from "@/components/ui/mobile-menu";

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "בית", href: "/" },
    { name: "שירותים", href: "/services" },
    { name: "אודות", href: "/about" },
    { name: "סיפורי לקוח", href: "/case-studies" },
    { name: "צור קשר", href: "/contact" },
  ];

  const isActivePage = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-50 py-6 px-4 sm:px-6 lg:px-8 bg-space-deep/80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
            <span className="font-heebo text-white text-2xl font-bold gradient-text">SharedVision AI</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-x-8 text-white">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isActivePage(item.href)
                    ? "text-purple-future font-bold"
                    : "hover:text-purple-future"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <a href="tel:+972508522528" className="hidden md:block btn btn-secondary">
            קבע פגישה
          </a>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={navigation}
        currentLocation={location}
      />
    </>
  );
}
