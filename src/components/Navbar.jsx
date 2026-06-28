// import { useState } from "react";
// import { X, Menu } from "lucide-react";
// import ReactDOM from "react-dom";

// const Navbar = ({ nav_links, activeLink, onLinkClick }) =>
// {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="flex items-center justify-between ">
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="tracking-[0.25em] text-sm font-bold text-text cursor-pointer transition-opacity uppercase font-mono"
//       >
//         May<span className="text-primary">.</span>
//       </button>



//       {/* Desktop links */}
//       <ul className="hidden md:flex items-center gap-8">
//         {nav_links.map(({ label, href }) => (
//           <li key={href}>
//             <button
//               onClick={() => onLinkClick(href)}
//               className={`uppercase text-xs tracking-[0.14em] transition-all duration-300 font-mono cursor-pointer px-4 py-2 rounded-full  ${activeLink === href
//                   ? "bg-primary/10 text-primary font-bold backdrop-blur-md shadow-[0_4px_12px_rgba(88,33,128,0.14)]"
//                   : "border-transparent text-muted hover:text-text hover:bg-primary/7 hover:shadow-[0_4px_12px_rgba(88,33,128,0.08)]"
//                 }`}
//             >
//               {label}
//             </button>



//           </li>
//         ))}
//       </ul>

//       {/* Mobile hamburger */}
//       <button
//         className="md:hidden p-1 text-text hover:opacity-70 transition-opacity"
//         onClick={() => setMenuOpen((v) => !v)}
//       >
//         <Menu size={24} />
//       </button>

//       {/* Mobile menu */}
//       {menuOpen &&
//         ReactDOM.createPortal(
//           <div className="fixed inset-0 z-50 bg-background/95 flex flex-col items-center justify-center gap-8">
//             <button
//               className="absolute top-5 right-8 p-1 text-text hover:text-primary transition-colors"
//               onClick={() => setMenuOpen(false)}
//             >
//               <X size={24} />
//             </button>

//             {nav_links.map(({ label, href }) => (
//               <button
//                 key={href}
//                 onClick={() =>
//                 {
//                   onLinkClick(href);
//                   setMenuOpen(false);
//                 }}
//                 className="text-2xl font-medium text-text hover:text-primary transition-colors font-archivo"
//               >
//                 {label}
//               </button>
//             ))}
//           </div>,
//           document.body,
//         )}
//     </div>
//   );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import ReactDOM from "react-dom";
import { Terminal, Folder, Briefcase, UserRound, Mail } from "lucide-react";

const Icons = { Terminal, Folder, Briefcase, UserRound, Mail };
const Navbar = ({ nav_links, activeLink, onLinkClick }) =>
{
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Drive CSS transition: open → set visible immediately, close → delay unmount

  useEffect(() =>
  {
    if (menuOpen)
    {
      setVisible(true);
    } else
    {
      const t = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(t);
    }
  }, [menuOpen]);


  const openMenu = () =>
  {
    setVisible(true);                          // 1. mount into DOM
    requestAnimationFrame(() =>
    {
      requestAnimationFrame(() =>
      {
        setMenuOpen(true);                     // 2. trigger transition one frame later
      });
    });
  };

  const closeMenu = () =>
  {
    setMenuOpen(false);                        // 1. trigger exit transition
    setTimeout(() => setVisible(false), 300); // 2. unmount after it finishes
  };

  return (
    <div className="flex items-center justify-between">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="tracking-[0.25em] text-md font-bold text-text cursor-pointer transition-opacity uppercase font-archivo"
      >
        May<span className="text-primary">.</span>
      </button>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8">
        {nav_links.map(({ label, href }) => (
          <li key={href}>
            <button
              onClick={() => onLinkClick(href)}
              className={`uppercase text-xs tracking-[0.14em] transition-all duration-300 font-archivo cursor-pointer px-4 py-2 rounded-full ${activeLink === href
                ? "bg-primary/10 text-primary font-bold backdrop-blur-md shadow-[0_4px_12px_rgba(88,33,128,0.14)]"
                : "border-transparent text-muted hover:text-text hover:bg-primary/7 hover:shadow-[0_4px_12px_rgba(88,33,128,0.08)]"
                }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden p-2 rounded-lg text-text hover:bg-primary/10 hover:text-primary transition-all duration-200"
        onClick={openMenu}
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Mobile drawer */}
      {visible &&
        ReactDOM.createPortal(
          <>
            {/* Backdrop */}
            <div
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
              style={{ opacity: menuOpen ? 1 : 0 }}
            />

            {/* Drawer panel */}
            <div
              className="fixed top-0 right-0 h-full z-50 w-[72%] max-w-[280px] bg-background border-l border-primary/20 flex flex-col transition-transform duration-300 ease-out"
              style={{ transform: menuOpen ? "translateX(0)" : "translateX(100%)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-6 border-b border-primary/10">
                <span className="tracking-[0.25em] text-md font-bold uppercase font-archivo text-muted">
                  Jump To
                </span>
                <button
                  onClick={closeMenu}
                  className="p-1.5 rounded-lg text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col pt-2 flex-1">
                {nav_links.map(({ label, href, icon }) =>
                {
                  const Icon = Icons[icon];
                  return (
                    <button
                      key={href}
                      onClick={() =>
                      {
                        onLinkClick(href);
                        setMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 px-5 py-3.5 text-left font-bold uppercase text-sm tracking-[0.14em] font-mono transition-all duration-200 border-r-2 ${activeLink === href
                          ? "text-primary bg-primary/8 border-primary"
                          : "text-muted hover:text-text hover:bg-primary/5 border-transparent"
                        }`}
                    >
                      {Icon && <Icon size={15} strokeWidth={activeLink === href ? 2.8 : 1.8} />}
                      {label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </>,
          document.body,
        )}
    </div>
  );
};

export default Navbar;