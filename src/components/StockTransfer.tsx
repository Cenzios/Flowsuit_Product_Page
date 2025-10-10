import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Check } from "lucide-react";

interface StockTransferringSectionProps {}

const StockTransferringSection = ({}: StockTransferringSectionProps) => {
  const features = [
    "Seamless stock movement across branches",
    "Real-time updates to prevent shortages",
  ];

  // ✅ Added badges (same structure as InventoryReportingSection)
  const badges = [
    { label: "Transfers Details", position: "-top-0 -left-2" },
    { label: "Stock View", position: "-top-10 right-0" },
    { label: "Multiple Transfer Categories", position: "bottom-1 left-0" },
    { label: "Fast & flexible\nstock transfers", position: "-bottom-6 -right-0" }

  ];

  // Define proper Variants for TS
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="stock-transferring"
      className="relative min-h-[60vh] bg-white overflow-hidden"
    >
      {/* Background floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-0 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-red-50 rounded-full blur-3xl opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -25, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 bg-gray-100 rounded-full blur-3xl opacity-50"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, 20, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16 min-h-[60vh]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
        >
          {/* Left Image + Badges */}
          <motion.div
            className="lg:flex-1 w-full max-w-xl sm:max-w-2xl order-2 lg:order-1 relative"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* 🏷️ Floating Badges */}
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${badge.position} z-20`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.15,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full shadow-xl flex items-center gap-2 drop-shadow-lg">
                    <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-red-500 stroke-[3]" />
                    </span>
                    {badge.label}
                  </div>
                </motion.div>
              ))}

              {/* Glow behind image */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-200/30 to-red-100/20 blur-3xl rounded-lg transform scale-105"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Stock Image */}
              <motion.img
                src="/images/stock.png"
                alt="FlowSuite Stock Transferring System"
                className="relative h-auto object-contain drop-shadow-2xl w-[400px] sm:w-[600px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />

              {/* Decorative accents */}
              <motion.div
                className="absolute -top-4 -left-4 w-16 sm:w-20 h-16 sm:h-20 bg-red-200/30 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 bg-orange-200/40 rounded-full blur-xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="lg:flex-1 w-full space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Header */}
            <motion.div className="space-y-4 sm:space-y-5">
              <motion.h2
                className="text-black font-bold leading-tight"
                style={{
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  fontSize: "26px",
                  lineHeight: "1.3",
                }}
                whileHover={{
                  scale: 1.02,
                  color: "#F94049",
                  transition: { duration: 0.3 },
                }}
              >
                Stock Transferring
              </motion.h2>
              <motion.p
                className="text-black leading-relaxed mx-auto lg:mx-0 max-w-lg"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "1.7",
                }}
              >
                Streamline operations with Cutting Stock Transfers. Manage and
                move fabric stock across processes with accuracy and visibility,
                ensuring resources are always available where needed.
              </motion.p>
            </motion.div>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-5 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 group justify-center lg:justify-start"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="flex-shrink-0 mt-0.5"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                    </div>
                  </motion.div>
                  <motion.p
                    className="text-black leading-relaxed"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "1.7",
                    }}
                    whileHover={{
                      color: "#F94049",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {feature}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StockTransferringSection;
