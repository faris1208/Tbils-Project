"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../navbar/styles.module.scss";
import logo from "../../../public/assets/images/tbils_logo.svg";
import { CloseIcon, Hamburger } from "../icons";

interface NavLink {
  path: string;
  label: string;
  targetSection?: string;
}

interface NavBarProps {
  admin?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ admin = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { path: "/", label: "Home", targetSection: "home" },
    { path: "/visa", label: "Visa", targetSection: "visa" },
    { path: "/blog", label: "Blog", targetSection: "blog" },
    // { path: "/contact", label: "Contact", targetSection: "contact" },
  ];

  const handleScrollToSection = (sectionId?: string) => {
    if (!sectionId) return;
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleScroll = useCallback(() => {
    const hasScrolled = window.scrollY >= 510;
    setIsScrolled(hasScrolled);
    
    if (hasScrolled && !isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div  className={`${isScrolled ? styles.wrapper_scrolled : styles.wrapper} ${
      admin ? styles.admin : ""
    }`}>
      <nav
        className={`${isScrolled ? styles.navbar_scrolled : styles.navbar} ${
          admin ? styles.admin : ""
        }`}
        style={{ backgroundColor: admin ? "#000" : undefined }}
      >
        <div className={styles.logo_container}>
          <Link href="/">
            <Image
              src={logo}
              alt="Company Logo"
              width={100}
              height={50}
              className={styles.logo}
            //   className={`${styles.logo} ${
            //     isScrolled ? styles.logo_black : styles.logo_white
            //   }`}
              priority
            />
          </Link>
        </div>

        <div className={styles.desktop_nav}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => handleScrollToSection(link.targetSection)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.btn}>
            <Link href={"/"}>
            <button>Contact Us</button>
            </Link>
          </div>
        </div>

       

        <button
          className={styles.mobile_menu_toggle}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {/* <Image
            src={isMobileMenuOpen ? exit : isScrolled ? menu : menu}
            alt="Menu"
            width={25}
            height={25}
          /> */}
          <Hamburger className={styles.hamburger} />
        </button>

        <div
          className={`${styles.mobile_nav} ${
            isMobileMenuOpen ? styles.mobile_nav_open : ""
          }`}
        >
          <button
            className={styles.mobile_nav_close}
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            {/* <Image src={exit} alt="Close menu" width={30} height={30} /> */}
            <CloseIcon className={styles.hamburger}  />
          </button>
          
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => {
                    handleScrollToSection(link.targetSection);
                    toggleMobileMenu();
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}


export default NavBar;