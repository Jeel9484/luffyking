"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
// Removed MagicLink import

export default function Header() {
  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Luffy Coin" className="h-10 w-10" />
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              LUFFY COIN
            </span>
          </div>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {['About', 'Tokenomics', 'Roadmap', 'How to Buy'].map((item) => (
            <Link key={item} href="#" className="text-white hover:text-yellow-400 transition-colors">
              {item}
            </Link>
          ))}
          
          <div className="flex gap-4 ml-8">
            <Link href="#" className="social-icon" aria-label="Twitter">
              <TwitterIcon />
            </Link>
            <Link href="#" className="social-icon" aria-label="Telegram">
              <TelegramIcon />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

// Simple icon components
function TwitterIcon() {
  return (
    <svg className="w-6 h-6 fill-current text-gray-300 hover:text-blue-400 transition-colors" viewBox="0 0 24 24">
      {/* Twitter icon path */}
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg className="w-6 h-6 fill-current text-gray-300 hover:text-blue-400 transition-colors" viewBox="0 0 24 24">
      {/* Telegram icon path */}
      <path d="M21.05 2.54a2.25 2.25 0 0 0-2.3-.36L3.7 8.6c-1.1.44-1.1 2.04.01 2.47l3.7 1.47 1.47 5.47c.28 1.04 1.7 1.18 2.18.2l2.1-4.13 4.13-2.1c.98-.48.84-1.9-.2-2.18l-5.47-1.47-1.47-3.7c-.43-1.1-2.03-1.1-2.47.01l-5.47 15.05c-.44 1.1 1.04 2.3 2.3.36l15.05-5.47c1.1-.44 1.1-2.04-.01-2.47z" />
    </svg>
  );
}