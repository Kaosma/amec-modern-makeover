import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/logo_basic.png";
import { services } from "@/data/services";

const links = [
  { label: "Om oss", href: "/om-oss" },
  { label: "Våra paket", href: "/vara-paket" },
  { label: "Prisberäkning", href: "/prisberakning" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="w-full flex items-center justify-between h-20 px-4 md:px-8 lg:px-12">
        <Link to="/" className="flex-shrink-0" aria-label="Till startsidan">
          <img src={logo} alt="AMECO Konsult AB" className="h-28 w-auto" />
        </Link>

        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          <li className="relative" onMouseEnter={() => setSvcOpen(true)} onMouseLeave={() => setSvcOpen(false)}>
            <button
              type="button"
              onClick={() => setSvcOpen((v) => !v)}
              aria-expanded={svcOpen}
              className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Tjänster <ChevronDown className={`w-4 h-4 transition-transform ${svcOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {svcOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72"
                >
                  <div className="rounded-xl bg-primary/90 backdrop-blur-md shadow-xl p-2">
                    {services.map((s) => (
                      <li key={s.title}>
                        <Link
                          to={s.path}
                          onClick={() => setSvcOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                        >
                          <s.icon className="w-4 h-4" /> {s.title}
                        </Link>
                      </li>
                    ))}
                  </div>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          {links.map((l) => (
            <li key={l.href}>
              <NavLink
                to={l.href}
                className={({ isActive }) => `text-sm font-medium transition-colors duration-200 ${isActive ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/form" state={{ subject: "Boka konsultation" }}
              className="text-sm font-medium px-5 py-2.5 rounded-lg bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Boka konsultation
            </Link>
          </li>
        </ul>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground" aria-label="Meny">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border/50 max-h-[calc(100dvh-5rem)] overflow-y-auto"
          >
            <ul className="flex flex-col p-4 gap-2">
              <li>
                <p className="text-xs uppercase tracking-widest text-primary py-2">Tjänster</p>
                <div className="rounded-xl bg-primary/90 p-2">
                  {services.map((s) => (
                    <Link key={s.title} to={s.path} onClick={() => setOpen(false)}
                      className="block px-3 py-2.5 rounded-lg text-sm text-primary-foreground hover:bg-primary-foreground/10">
                      {s.title}
                    </Link>
                  ))}
                </div>
              </li>
              {links.map((l) => (
                <li key={l.href}>
                  <NavLink to={l.href} onClick={() => setOpen(false)}
                    className="block text-foreground/80 hover:text-primary transition-colors py-2">
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link to="/form" state={{ subject: "Boka konsultation" }} onClick={() => setOpen(false)}
                  className="block text-center px-5 py-2.5 rounded-lg bg-gradient-gold text-primary-foreground">
                  Boka konsultation
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
