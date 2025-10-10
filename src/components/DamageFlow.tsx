import { motion } from "framer-motion";
import { Check } from "lucide-react";

const DamageFlowSection = () => {
  const features = [
    "Smart detection of stock damages & discrepancies",
    "Real time monitoring to minimize risks",
    "Automated reports for better accountability",
  ];

  const badges = [
    { label: "Add Damage Section", position: "-top-6 -left-2" },
    { label: "Damage Details", position: "-top-10 right-6" },
    { label: "Keeps Stock Accurate", position: "bottom-6 left-0" },
    { label: "Damage Logs", position: "-bottom-2 right-15" },
  ];

  return (
    <section
      id="damage-flow-control"
      className="relative min-h-[60vh] bg-[#F5F3F0] overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-0 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-orange-50 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 bg-yellow-50 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
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
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 min-h-[60vh]">
          {/* Left Image Section */}
          <motion.div className="lg:flex-1 w-full max-w-lg sm:max-w-xl md:max-w-2xl order-2 lg:order-1 relative">
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
                  <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full shadow-xl flex items-center gap-2 drop-shadow-lg">
                    <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-red-500 stroke-[3]" />
                    </span>
                    {badge.label}
                  </div>
                </motion.div>
              ))}

              {/* Damage Flow Image */}
              <motion.img
                src="/images/damage.png"
                alt="FlowSuite Damage Flow Control"
                className="relative w-full h-auto object-contain drop-shadow-2xl rounded-lg z-10"
                initial={{ rotateY: -5 }}
                whileInView={{ rotateY: 0 }}
                transition={{ duration: 0.8 }}
              />

              {/* Decorative Glows */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-orange-200/40 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-200/40 rounded-full blur-xl"
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

          {/* Right Content Section */}
          <motion.div className="lg:flex-1 w-full space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left">
            {/* Header */}
            <div className="space-y-4 sm:space-y-5">
              <h2
                className="text-black leading-tight"
                style={{
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  fontWeight: 700,
                  fontSize: "26px",
                  lineHeight: "1.3",
                }}
              >
                Advance Intelligent Damage Flow Control
              </h2>
              <p
                className="text-black leading-relaxed mx-auto lg:mx-0 max-w-lg"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "1.7",
                }}
              >
                Protect your profits with Intelligent Damage Flow Control that
                tracks, categorizes, and analyses damaged goods to reduce losses
                and guide smarter decisions.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 sm:space-y-5 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group justify-center lg:justify-start"
                >
                  <motion.div
                    className="flex-shrink-0 mt-0.5"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                    </div>
                  </motion.div>
                  <p
                    className="text-black leading-relaxed max-w-xs sm:max-w-md lg:max-w-none"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "1.7",
                    }}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DamageFlowSection;
