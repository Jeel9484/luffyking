'use client';
import { motion } from 'framer-motion';
import { FaTwitter, FaTelegram, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-md border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <img src="/logo.png" alt="Luffy Coin" className="h-10 w-10 mr-3" />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                LUFFY COIN
              </span>
            </div>
            
            <div className="flex space-x-6">
              <motion.div whileHover={{ y: -3 }}>
                <a href="https://x.com/pirateluffy___?s=11" target='blank' className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <BsTwitterX className="text-2xl" />
                </a>
              </motion.div>
              <motion.div whileHover={{ y: -3 }}>
                <a href="https://t.me/+-f0j2EmdN_o4OGQ1" target='blank' className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <FaTelegram className="text-2xl" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Luffy Coin. All rights reserved.</p>
            <p className="mt-2">The King of Crypto Pirates</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}