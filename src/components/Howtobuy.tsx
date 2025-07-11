'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Create a Wallet",
    description: "Download Phantom or MetaMask wallet",
    icon: "👛",
  },
  {
    title: "Get SOL/ETH",
    description: "Buy on exchanges like Binance or Coinbase",
    icon: "💸",
  },
  {
    title: "Go to Raydium/Uniswap",
    description: "Connect your wallet to the DEX",
    icon: "🔗",
  },
  {
    title: "Swap for LUFFY",
    description: "Enter contract address and confirm swap",
    icon: "🔄",
  },
  {
    title: "HODL & Earn",
    description: "Stake to earn more rewards",
    icon: "🚀",
  },
];

export function HowToBuy() {
  return (
    <section id="how-to-buy" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
            HOW TO BOARD
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-full p-6 bg-gray-800/50 backdrop-blur-md border border-yellow-500/20 rounded-xl hover:border-yellow-400/50 transition-all hover:shadow-lg hover:shadow-yellow-500/10">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  <div className="mt-auto text-yellow-500 font-mono text-sm">
                    Step {index + 1}/5
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="mt-16 text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full font-bold text-black shadow-lg hover:shadow-yellow-500/30 transition-all">
                COPY CONTRACT ADDRESS
              </button>
            </motion.div>
            <p className="mt-4 text-gray-400 text-sm">
              (Dummy address: 0x5FbDB2315678afecb367f032d93F642...)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}