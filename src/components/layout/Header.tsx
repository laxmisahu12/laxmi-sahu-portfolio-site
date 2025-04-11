
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') !== 'false';
    setDarkMode(isDark);
    updateTheme(isDark);
  }, []);

  // Apply theme changes to DOM
  const updateTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    updateTheme(newDarkMode);
  };

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
          ? 'bg-background/80 backdrop-blur-md shadow-sm border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center font-bold text-xl">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground mr-2 hover:animate-pulse-slow transition-all duration-300 hover:scale-105">
              LS
            </div>
            <span className="hidden sm:block">Laxmi Sahu</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigationLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-foreground/80 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-primary after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="transition-transform hover:rotate-45 duration-300"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 animate-spin-slow" />
              ) : (
                <Moon className="h-5 w-5 animate-spin-slow" />
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
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
        <div className="md:hidden bg-background dark:bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="py-2 text-foreground font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
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
