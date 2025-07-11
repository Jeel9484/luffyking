'use client';
import { AnimatePresence, motion } from 'framer-motion';

export function Tokenomics() {
  const data = [
    { name: 'Liquidity', value: 60, color: '#F59E0B' },
    { name: 'Marketing', value: 15, color: '#EF4444' },
    { name: 'Development', value: 15, color: '#3B82F6' },
    { name: 'Team', value: 10, color: '#10B981' }
  ];

  // Calculate SVG path data for pie chart
  const calculatePath = (index: number) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const startAngle = data.slice(0, index).reduce((sum, item) => sum + (item.value / total) * 360, 0);
    const endAngle = startAngle + (data[index].value / total) * 360;
    const startRad = (startAngle - 90) * Math.PI / 180;
    const endRad = (endAngle - 90) * Math.PI / 180;
    const x1 = 180 + 180 * Math.cos(startRad);
    const y1 = 180 + 180 * Math.sin(startRad);
    const x2 = 180 + 180 * Math.cos(endRad);
    const y2 = 180 + 180 * Math.sin(endRad);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
    return `M 180 180 L ${x1} ${y1} A 180 180 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  return (
    <section id="tokenomics" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
            TOKEN DISTRIBUTION
          </h2>
        </motion.div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 relative">
            <svg viewBox="0 0 360 360" className="w-full max-w-md mx-auto">
              {data.map((item, index) => (
                <motion.path
                  key={item.name}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                    type: "spring",
                    damping: 10
                  }}
                  d={calculatePath(index)}
                  fill={item.color}
                  stroke="none"
                />
              ))}
              <motion.circle
                cx="180"
                cy="180"
                r="60"
                fill="#111"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 }}
              />
              <motion.text
                x="180"
                y="180"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#F59E0B"
                fontSize="24"
                fontWeight="bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                LUFFY
              </motion.text>
            </svg>
          </div>
          <div className="w-full md:w-1/2">
            <AnimatePresence>
              {data.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center">
                    <div
                      className="w-6 h-6 rounded-full mr-4"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{item.name}</span>
                        <span className="text-yellow-400 font-bold">{item.value}%</span>
                      </div>
                      <div className="h-1 bg-gray-800 mt-1">
                        <div className="h-full" style={{ backgroundColor: item.color }}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.value}%` }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                            style={{ height: '100%' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}