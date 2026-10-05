import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/logo_basic.png";

const links = [
  { label: "Tjänster", href: "/tjanster" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Prisberäkning", href: "/prisberakning" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex-shrink-0" aria-label="Till startsidan">
          <img src={logo} alt="AMECO Konsult AB" className="h-28 w-auto" />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
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
              to="/kontakt"
              className="text-sm font-medium px-5 py-2.5 rounded-lg bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Boka konsultation
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Meny"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border/50"
          >
            <ul className="flex flex-col p-4 gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <NavLink
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-foreground/80 hover:text-primary transition-colors py-2"
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link
                  to="/kontakt"
                  onClick={() => setOpen(false)}
                  className="block text-center px-5 py-2.5 rounded-lg bg-gradient-gold text-primary-foreground"
                >
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
