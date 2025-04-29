
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll event for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'h-[var(--nav-scroll-height)] shadow-md shadow-navy-shadow' 
          : 'h-[var(--nav-height)]'
      } bg-navy`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center font-bold text-xl">
            <div className="flex items-center justify-center w-10 h-10 rounded-full text-primary hover:bg-green-tint transition-colors">
              LS
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <ol className="flex space-x-5 items-center font-mono text-sm">
              {navigationLinks.map((link, index) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`transition-colors hover:text-primary ${
                      location.pathname === link.path 
                        ? 'text-primary' 
                        : 'text-slate-lightest'
                    }`}
                  >
                    <span className="text-primary mr-1">0{index + 1}.</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:text-primary hover:bg-green-tint"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-light-navy py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            {navigationLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 font-mono transition-colors hover:text-primary ${
                  location.pathname === link.path 
                    ? 'text-primary' 
                    : 'text-slate-lightest'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-primary mr-2">0{index + 1}.</span>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
