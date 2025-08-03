import { Link } from "wouter";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: Array<{ name: string; href: string }>;
  currentLocation: string;
}

export default function MobileMenu({ isOpen, onClose, navigation, currentLocation }: MobileMenuProps) {
  const isActivePage = (href: string) => {
    if (href === "/" && currentLocation === "/") return true;
    if (href !== "/" && currentLocation.startsWith(href)) return true;
    return false;
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={`mobile-nav fixed inset-0 bg-space-deep z-40 flex flex-col items-center justify-center transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <nav className="flex flex-col items-center gap-y-8 text-xl text-white">
        {navigation.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={handleLinkClick}
            className={`transition-colors opacity-0 transform translate-y-5 ${
              isActivePage(item.href)
                ? "text-purple-future font-bold"
                : "hover:text-purple-future"
            }`}
            style={{
              animation: isOpen ? `fadeInUp 0.3s ease forwards ${index * 0.1}s` : 'none'
            }}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      
      <button 
        className="absolute top-6 right-6 text-white"
        onClick={onClose}
      >
        <X className="w-8 h-8" />
      </button>
      
      <a 
        href="tel:+972508522528" 
        onClick={handleLinkClick}
        className="btn btn-primary mt-8"
      >
        קבע פגישה
      </a>


    </div>
  );
}
