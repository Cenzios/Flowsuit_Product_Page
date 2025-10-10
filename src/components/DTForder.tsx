import { motion } from "framer-motion";
import { Check } from "lucide-react";

const DTFOrderingSection = () => {
  const features = [
    "Easily create custom DTF orders, selecting sizes, designs, and colors with just a few clicks.",
    "Customize DTF orders with various material and design options to meet unique requirements.",
    "The easy-to-use interface makes creating and managing DTF orders seamless.",
  ];

  const badges = [
    { label: "Order By Print Type", position: "-top-8 -left-2" },
    { label: "Simple DTF order process", position: "-top-10 -right-2" },
    { label: "Order By Press Type", position: "bottom-4 -left-2" },
    { label: "Easy to create", position: "bottom-2 -right-2" },
  ];

  return (
    <section
      id="dtf-ordering"
      className="relative bg-white overflow-hidden min-h-[60vh]"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-0 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-orange-50 rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-green-50 rounded-full blur-3xl opacity-50"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Image */}
          <div className="w-full lg:flex-1 max-w-2xl order-1 lg:order-1">
            <div className="relative flex justify-center items-center">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 to-green-100/20 blur-3xl rounded-lg transform scale-105"></div>

              {/* DTF Ordering Image */}
              <img
                src="/images/dtfordering.png"
                alt="FlowSuite DTF Ordering System"
                className="relative w-full h-auto object-contain drop-shadow-2xl max-w-[90%] sm:max-w-[80%] md:max-w-full"
              />

              {/* Animated Badges */}
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
                  <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-lg shadow-xl flex items-center gap-2 drop-shadow-lg">
                    <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-red-500 stroke-[3]" />
                    </span>
                    {badge.label}
                  </div>
                </motion.div>
              ))}

              {/* Decorative corner accents */}
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:flex-1 space-y-8 order-2 lg:order-2 text-center lg:text-left">
            {/* Header */}
            <div className="space-y-4 sm:space-y-5">
              <h2
                className="text-black leading-tight text-2xl sm:text-3xl md:text-[26px] font-bold"
                style={{
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  lineHeight: "1.3",
                }}
              >
                DTF Ordering
              </h2>
              <p
                className="text-black leading-relaxed text-base sm:text-[16px] md:text-[17px] font-normal"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: "1.7",
                }}
              >
                Simplify your DTF order process with our intuitive system,
                ensuring efficiency from start to finish.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-5 pt-3 sm:pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start justify-start gap-3 mx-auto lg:mx-0 max-w-md sm:max-w-none"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-[#46A834] flex items-center justify-center">
                      <Check
                        className="w-3.5 h-3.5 text-white stroke-[5]
"
                      />
                    </div>
                  </div>
                  <p
                    className="text-black text-left leading-relaxed text-[15px] sm:text-[16px] font-normal"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "16px",
                      fontWeight: 300,
                      lineHeight: "1.7",
                    }}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout: Header → Description → Image → Points */}
        <div className="lg:hidden w-full space-y-6">
          {/* Mobile Header */}
          <motion.h2
            className="text-black font-bold leading-tight text-left"
            style={{
              fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
              fontSize: "26px",
              lineHeight: "1.3",
              fontWeight: 700,
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            DTF Ordering
          </motion.h2>

          {/* Mobile Description */}
          <motion.p
            className="text-black leading-relaxed text-left"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: "1.7",
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Simplify your DTF order process with our intuitive system, ensuring
            efficiency from start to finish.
          </motion.p>

          {/* Mobile Image with Badges */}
          <motion.div
            className="relative w-full pt-8 pb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div className="relative">
              {/* Top Left - Order By Print Type */}
              <motion.div
                className="absolute -top-11 left-8 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-medium px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-red-500 stroke-[3]" />
                  </span>
                  Order By <br /> Print Type
                </div>
              </motion.div>

              {/* Top Right - Simple DTF order process */}
              <motion.div
                className="absolute -top-8 right-6 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-medium px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-red-500 stroke-[3]" />
                  </span>
                  Simple DTF <br /> order process
                </div>
              </motion.div>

              {/* Bottom Left - Order By Press Type */}
              <motion.div
                className="absolute -bottom-6 left-7 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-medium px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-red-500 stroke-[3]" />
                  </span>
                  Order By <br /> Press Type
                </div>
              </motion.div>

              {/* Bottom Right - Easy to create */}
              <motion.div
                className="absolute bottom-0 right-7 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-medium px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-red-500 stroke-[3]" />
                  </span>
                  Easy to create
                </div>
              </motion.div>

              {/* Main Image */}
              <motion.img
                src="/images/7.png"
                alt="FlowSuite DTF Ordering System"
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
                    fontWeight: 300,
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

export default DTFOrderingSection;
