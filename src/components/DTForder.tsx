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
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
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
                  <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full shadow-xl flex items-center gap-2 drop-shadow-lg">
                    <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-red-500 stroke-[3]" />
                    </span>
                    {badge.label}
                  </div>
                </motion.div>
              ))}

              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 sm:w-20 sm:h-20 bg-orange-200/40 rounded-full blur-xl" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 sm:w-24 sm:h-24 bg-green-200/30 rounded-full blur-xl" />
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
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                    </div>
                  </div>
                  <p
                    className="text-black text-left leading-relaxed text-[15px] sm:text-[16px] font-normal"
                    style={{
                      fontFamily: "'Inter', sans-serif",
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
      </div>
    </section>
  );
};

export default DTFOrderingSection;
