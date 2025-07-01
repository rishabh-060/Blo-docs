import React from 'react'
import { Container, Logo } from '../index'
import { Link } from 'react-router-dom'
import {
  FaGithub,
  FaTelegram,
  FaSquareInstagram,
  FaLinkedinIn
} from 'react-icons/fa6'

const Footer = () => {
  const socialLinks = [
    {
      href: 'https://github.com/rishabh-060',
      icon: <FaGithub />,
      label: 'GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/rishabh-verma-277530223/',
      icon: <FaLinkedinIn />,
      label: 'LinkedIn'
    },
    {
      href: 'https://t.me/rishabh_060',
      icon: <FaTelegram />,
      label: 'Telegram'
    },
    {
      href: 'https://instagram.com/_rishabh_60',
      icon: <FaSquareInstagram />,
      label: 'Instagram'
    }
  ]

  return (
    <footer className="w-full bg-fuchsia-950 text-fuchsia-200 border-t border-fuchsia-800 pt-6">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6">
          {/* Logo */}
          <Link to="/" className="mb-2 md:mb-0">
            <Logo textColor="text-fuchsia-200" />
          </Link>

          {/* Social Icons */}
          <ul className="flex flex-wrap gap-5 text-2xl">
            {socialLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="hover:text-white transition-all duration-200 hover:scale-110"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-fuchsia-800 mt-4 py-4 text-center text-sm text-fuchsia-300">
          <p>
            © {new Date().getFullYear()} All rights reserved. Made with{' '}
            <span className="text-amber-500">❤️</span> by{' '}
            <a
              href="https://rishabh-060.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:underline font-semibold"
            >
              @rishabh_verma
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
