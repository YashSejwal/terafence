import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search,
  BookOpen, Building, Users,
  MessageCircle, Shield, Zap, Globe, Heart,
  LayoutGrid, Laptop, Newspaper, Briefcase
} from 'lucide-react';
import tera from "../assets/terafence.png";

const MegaNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const megaMenus = {
    products: {
      title: 'Products',
      sections: [
        {
          title: 'Core Solutions',
          items: [
            { icon: <Shield size={20} />, title: 'Security', description: 'Enterprise-grade protection' },
            { icon: <Zap size={20} />, title: 'Performance', description: 'Lightning-fast optimization' },
            { icon: <Globe size={20} />, title: 'Global CDN', description: 'Worldwide content delivery' },
          ]
        },
        {
          title: 'Enterprise',
          items: [
            { icon: <Building size={20} />, title: 'Business Suite', description: 'Complete business solution' },
            { icon: <Users size={20} />, title: 'Team Management', description: 'Collaborative workspace' },
            { icon: <MessageCircle size={20} />, title: 'Communication', description: 'Unified messaging platform' },
          ]
        }
      ]
    },
    resources: {
      title: 'Resources',
      sections: [
        {
          title: 'Developer Tools',
          items: [
            { icon: <Laptop size={20} />, title: 'Documentation', description: 'Comprehensive guides' },
            { icon: <BookOpen size={20} />, title: 'API Reference', description: 'Technical specifications' },
            { icon: <LayoutGrid size={20} />, title: 'Component Library', description: 'UI building blocks' },
          ]
        },
        {
          title: 'Company',
          items: [
            { icon: <Newspaper size={20} />, title: 'Blog', description: 'Latest updates & news' },
            { icon: <Briefcase size={20} />, title: 'Careers', description: 'Join our team' },
            { icon: <Heart size={20} />, title: 'Community', description: 'Connect with others' },
          ]
        }
      ]
    }
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const megaMenuVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 100
      }
    },
    exit: { 
      opacity: 0,
      y: 10,
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      x: '100%',
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 w-full z-50 transition-all duration-500
        ${isScrolled 
          ? 'bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-xl shadow-lg py-2' 
          : 'bg-gradient-to-r from-white to-blue-50 py-4'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">

          <Link 
            to="/" 
            className="relative group flex items-center space-x-3"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <img 
                src={tera} 
                alt="Logo" 
                className="h-18 w-24  object-contain transition-transform duration-300"
              />
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Enhanced Search */}
            <motion.div 
              animate={{ width: isSearchExpanded ? '300px' : '200px' }}
              className="relative group"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchExpanded(true)}
                onBlur={() => setIsSearchExpanded(false)}
                placeholder="Search..."
                className="w-full px-4 py-2.5 pl-10 rounded-full bg-white/50 
                  border border-gray-200 backdrop-blur-sm
                  focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white 
                  transition-all duration-300 group-hover:bg-white"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
            </motion.div>

            {/* Mega Menu Triggers */}
            {Object.entries(megaMenus).map(([key, menu]) => (
              <div 
                key={key}
                className="relative"
                onMouseEnter={() => setActiveMegaMenu(key)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1 px-4 py-2.5 rounded-full
                    text-gray-700 hover:text-blue-600 hover:bg-white/80
                    transition-all duration-300"
                >
                  <span className="font-medium">{menu.title}</span>
                  <motion.div
                    animate={{ rotate: activeMegaMenu === key ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </motion.button>

                {/* Mega Menu Content */}
                <AnimatePresence>
                  {activeMegaMenu === key && (
                    <motion.div
                      variants={megaMenuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full right-0 w-screen max-w-4xl 
                        bg-gradient-to-br from-white to-blue-50/90 backdrop-blur-xl
                        rounded-2xl shadow-2xl mt-4 p-8 border border-gray-100"
                      style={{
                        transform: 'translateX(calc((-100% + 200px) / 2))'
                      }}
                    >
                      <div className="grid grid-cols-2 gap-12">
                        {menu.sections.map((section, idx) => (
                          <div key={idx} className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                              {section.title}
                            </h3>
                            <div className="space-y-4">
                              {section.items.map((item, itemIdx) => (
                                <motion.a
                                  key={itemIdx}
                                  href="#"
                                  whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                                  className="flex items-start space-x-4 p-3 rounded-xl
                                    hover:shadow-md transition-all duration-300"
                                >
                                  <div className="flex items-center justify-center w-10 h-10 rounded-lg
                                    bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                                    {item.icon}
                                  </div>
                                  <div>
                                    <div className="font-medium text-gray-900">
                                      {item.title}
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">
                                      {item.description}
                                    </div>
                                  </div>
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* About and Contact Links */}
            {['About', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="relative group px-4 py-2.5 rounded-full
                  text-gray-700 font-medium hover:text-blue-600 hover:bg-white/80
                  transition-all duration-300"
              >
                {item}
                <span className="absolute bottom-2 left-4 w-0 h-0.5 
                  bg-gradient-to-r from-blue-600 to-purple-600 
                  transition-all duration-300 group-hover:w-[calc(100%-32px)]" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2.5 rounded-xl bg-white/80 hover:bg-white
              shadow-sm hover:shadow transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 w-full max-w-sm 
              bg-gradient-to-br from-white to-blue-50 shadow-2xl lg:hidden 
              overflow-y-auto border-l border-gray-100"
          >
            <div className="p-6 space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 
                  text-transparent bg-clip-text">Menu</h2>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/80 transition-colors duration-300"
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-3 pl-10 rounded-xl bg-white/50 
                    border border-gray-200 focus:outline-none focus:ring-2 
                    focus:ring-blue-500/50 focus:bg-white transition-all duration-300"
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>

              <div className="space-y-8">
                {Object.entries(megaMenus).map(([key, menu]) => (
                  <div key={key} className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                      {menu.title}
                    </h3>
                    {menu.sections.map((section, idx) => (
                      <div key={idx} className="space-y-4">
                        <h4 className="text-sm font-medium text-gray-500 pl-2">
                          {section.title}
                        </h4>
                        {section.items.map((item, itemIdx) => (
                          <motion.a
                            key={itemIdx}
                            href="#"
                            whileHover={{ x: 10 }}
                            className="flex items-center space-x-3 p-2 rounded-xl
                              hover:bg-white/80 transition-all duration-300"
                          >
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg
                              bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                              {item.icon}
                            </div>
                            <div className="text-gray-700 font-medium">{item.title}</div>
                          </motion.a>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Mobile About and Contact Links */}
              <div className="space-y-2 pt-4 border-t">
                {['About', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="block px-4 py-3 text-gray-700 font-medium rounded-xl bg-white/50 hover:bg-white hover:shadow-sm
                    transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default MegaNavbar;