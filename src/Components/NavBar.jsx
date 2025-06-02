import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";

const navItems = ["Home", "About", "Projects", "Certifications", "Contact"];

const NavBar = () => {
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (!navContainerRef.current) return;

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    if (!navContainerRef.current) return;

    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 backdrop-blur-sm"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Portfolio button */}
          <div className="flex items-center gap-7">
            <img src="/files/logo192.png" alt="logo" className="w-10" />
            <div className="bg-gradient-to-tl nav-item md:flex hidden items-center font-freedomregular text-3xl tracking-wider justify-center gap-1 px-3 py-1 rounded">
              Portfolio
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
                  className="nav-hover-btn p-6 nav-item font-semibold text-slate-500 hover-underline"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
