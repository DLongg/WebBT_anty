"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Trang chủ", path: "/" },
  { name: "Giới thiệu", path: "/about" },
  { name: "Dịch vụ", path: "/services" },
  { name: "Dự án", path: "/projects" },
  { name: "Tin tức", path: "/news" },
  { name: "Liên hệ", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isWhiteHeader = isScrolled || !isHomePage || isMobileMenuOpen;

  const headerBg = isWhiteHeader
    ? "bg-white shadow-md text-brand-dark"
    : "bg-transparent text-white";

  return (
    <>

      {/* Main Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          headerBg
        )}
      >
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/bt-logo.png"
              alt="BT DECOM Logo"
              className="h-14 w-auto"
            />
            <div className="flex flex-col">
              <span className={cn("font-heading font-extrabold text-xl tracking-wider leading-none",
                isWhiteHeader ? "text-brand-gold" : "text-white"
              )}>
                BT DECOM., LTD
              </span>
              <span className={cn("text-[9px] tracking-widest uppercase mt-1",
                isWhiteHeader ? "text-brand-dark/60" : "text-white/70"
              )}>
                Chất lượng · Tiến độ · Hiệu quả
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-5">
              {NAV_LINKS.map((link) => {
                const isActive = link.path === "/" ? pathname === "/" : pathname.startsWith(link.path);
                return (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={cn(
                        "text-sm font-medium transition-colors relative group",
                        isWhiteHeader ? "hover:text-brand-gold" : "hover:text-[#4ADE80]",
                        isActive ? (isWhiteHeader ? "text-brand-gold" : "text-[#4ADE80]") : ""
                      )}
                    >
                      {link.name}
                      <span
                        className={cn(
                          "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                          isWhiteHeader ? "bg-brand-gold" : "bg-[#4ADE80]",
                          isActive ? "w-full" : ""
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button asChild>
              <Link href="/contact">Liên hệ ngay</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        <div
          className={cn(
            "fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden flex flex-col",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex-1 overflow-y-auto py-8 px-6">
            <ul className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = link.path === "/" ? pathname === "/" : pathname.startsWith(link.path);
                return (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={cn(
                        "block text-lg font-medium py-2 border-b border-gray-100",
                        isActive ? "text-brand-gold" : "text-brand-dark"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 space-y-3">
              <Button className="w-full" size="lg" asChild>
                <Link href="/contact">Liên hệ ngay</Link>
              </Button>
              <div className="text-center text-sm text-gray-500 pt-2">
                <a href="tel:0936189292" className="text-brand-gold font-semibold">0936 189 292</a>
                <span className="mx-2">|</span>
                <a href="mailto:btdecom@gmail.com" className="text-brand-gold">btdecom@gmail.com</a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
