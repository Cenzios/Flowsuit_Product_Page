import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface InventoryReportingSectionProps {}

const InventoryReportingSection = ({}: InventoryReportingSectionProps) => {
  const features = [
    "Smart filters with easy customer report generation",
    "Customizable reports by product, date, or department",
    "Actionable insights for smarter strategies",
    "Detailed stock and damage tracking",
    "Easy report export options",
  ];

  const badges = [
    { label: "Advance Reports", position: "-top-8 left-0" },
    { label: "Advance Filtering", position: "-top-10 right-5" },
    { label: "Clear Interface", position: "bottom-6 left-0" },
    { label: "Easy Export", position: "-bottom-10 -right-0" },
  ];

  return (
    <section
      id="inventory-reporting"
      className="relative min-h-[60vh] bg-[#F5F3F0] overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row items-center gap-16 min-h-[60vh]">
          {/* Left Content - Desktop */}
          <motion.div
            className="flex-1 w-full space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-5">
              <motion.p
                className="text-red-500 font-bold tracking-wider"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  letterSpacing: "0.1em",
                }}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                INVENTORY
              </motion.p>
              <motion.h2
                className="text-black leading-tight"
                style={{
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  fontWeight: 700,
                  fontSize: "26px",
                  lineHeight: "1.3",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Advance Reporting
              </motion.h2>
              <motion.p
                className="text-black leading-relaxed max-w-lg"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "1.7",
                }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Turn data into decisions with Advanced Reporting covering sales,
                orders, stock, production, and damages for a 360° business view.
              </motion.p>
            </div>

            {/* Features List */}
            <div className="space-y-5 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="flex-shrink-0 mt-0.5"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-[#46A834] flex items-center justify-center">
                      <Check
                        className="w-3.5 h-3.5 text-white stroke-[5]
"
                      />
                    </div>
                  </motion.div>
                  <p
                    className="text-black leading-relaxed"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "1.7",
                    }}
                  >
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image + Badges - Desktop */}
          <motion.div
            className="flex-1 w-full max-w-2xl relative"
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{ perspective: "1000px" }}
            >
              {/* Badges */}
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
                  <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-sm font-medium px-4 py-1.5 rounded-lg shadow-xl flex items-center gap-2 drop-shadow-lg">
                    <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-red-500 stroke-[3]" />
                    </span>
                    {badge.label}
                  </div>
                </motion.div>
              ))}

              {/* Main Image */}
              <motion.img
                src="/images/inventory.png"
                alt="FlowSuite Inventory Reporting Dashboard"
                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
                initial={{ rotateY: -5 }}
                whileInView={{ rotateY: 0 }}
                transition={{ duration: 0.8 }}
              />

              {/* Corner Accents */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-red-200/40 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-200/30 rounded-full blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Layout: Header → Description → Image → Points */}
        <div className="lg:hidden w-full space-y-6">
          {/* Mobile Header */}
          <motion.h2
            className="text-black leading-tight font-bold text-left"
            style={{
              fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
              fontSize: "26px",
              lineHeight: "1.3",
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Advance Reporting
          </motion.h2>

          {/* Mobile Description */}
          <motion.p
            className="text-black leading-relaxed text-left"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: "1.7",
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Turn data into decisions with Advanced Reporting covering sales,
            orders, stock, production, and damages for a 360° business view.
          </motion.p>

          {/* Mobile Image with Badges */}
          <motion.div
            className="relative w-full pt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div className="relative">
              {/* Mobile Badges - Adjusted positions */}
              {/* Top Left - Advanced Reports */}
              <motion.div
                className="absolute -top-6 left-12 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-medium px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-red-500 stroke-[3]" />
                  </span>
                  Advanced Reports
                </div>
              </motion.div>

              {/* Top Right - Advanced Filtering */}
              <motion.div
                className="absolute -top-12 right-8 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-medium px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-red-500 stroke-[3]" />
                  </span>
                  Advanced <br /> Filtering
                </div>
              </motion.div>

              {/* Bottom Left - Clear Interface */}
              <motion.div
                className="absolute bottom-4 left-2 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-medium px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-red-500 stroke-[3]" />
                  </span>
                  Clear Interface
                </div>
              </motion.div>

              {/* Bottom Right - Easy Export */}
              <motion.div
                className="absolute bottom-2 right-2 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-medium px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-red-500 stroke-[3]" />
                  </span>
                  Easy Export
                </div>
              </motion.div>

              {/* Main Image */}
              <motion.img
                src="/images/2.png"
                alt="FlowSuite Inventory Reporting Dashboard"
                className="w-full h-auto object-contain relative z-10 drop-shadow-xl"
              />
            </motion.div>
          </motion.div>

          {/* Mobile Features List */}
          <div className="space-y-4 pt-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 justify-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <motion.div className="flex-shrink-0 mt-0.5">
                  <div className="w-5 h-5 rounded-full bg-[#46A834] flex items-center justify-center">
                    <Check
                      className="w-3.5 h-3.5 text-white stroke-[5]
"
                    />
                  </div>
                </motion.div>
                <p
                  className="text-black leading-relaxed text-left"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "1.7",
                  }}
                >
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryReportingSection;
