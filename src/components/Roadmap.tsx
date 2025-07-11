'use client';
import { motion } from 'framer-motion';

export function Roadmap() {
  const phases = [
    { title: "Q3 2024", items: ["Token Launch", "CEX Listings", "10,000 Holders"] },
    { title: "Q4 2024", items: ["NFT Collection", "DEX Expansion", "50,000 Holders"] },
    { title: "2025", items: ["Pirate Metaverse", "Game Development", "100,000+ Holders"] }
  ];

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
            VOYAGE MAP
          </h2>
        </motion.div>
        
        <div className="relative">
          <div className="absolute left-1/2 h-full w-1 bg-yellow-500 transform -translate-x-1/2" />
          
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                <div className={`flex justify-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-full md:w-5/12 p-6 bg-gray-800/50 backdrop-blur-md rounded-xl border border-yellow-500/30 hover:border-yellow-400/50 transition-all">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-4">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li className="flex items-start" key={i}>
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-yellow-400 mr-2">▸</span>
                            <span className="text-gray-300">{item}</span>
                          </motion.span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}