import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  // Smooth staggered animation for text and buttons
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // ✅ Fixed TypeScript error with easing (added type assertion)
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1] as [number, number, number, number], // ✅ type-safe fix
      },
    },
  };

  return (
    // ✅ Reduced section height (was min-h-[60vh], now min-h-[70vh])
    <section className="relative bg-[#FFE4DE] overflow-hidden min-h-[60vh] flex items-center pt-10">
      {/* Animated gradient background */}
      {/* <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#FFE4DE] via-[#FFF5F2] to-[#FFDAD6]"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      /> */}

      {/* Soft glowing circles for atmosphere */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-red-200/30 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, -25, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-27">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          {/* Left Text Content - Desktop */}
          <motion.div
            className="hidden lg:block max-w-2xl space-y-8 lg:flex-1"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={fadeUp}
              className="text-black leading-tight"
              style={{
                fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                fontWeight: 700,
                fontSize: "50px",
                lineHeight: "1.2",
              }}
            >
              Smarter <span className="text-[#F94049]">Apparel Management</span>{" "}
              Starts <br className="hidden sm:block" /> Here
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-black leading-relaxed pr-20"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.7",
                maxWidth: "600px",
              }}
            >
              Gain full control of your production cycle with advanced
              dashboards, real-time tracking, reporting, and powerful admin
              tools all in one system.
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-4">
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTACT US
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Mobile Layout: Header → Description → Image → Button */}
          <motion.div
            className="lg:hidden w-full space-y-4 "
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Mobile Header */}
            <motion.h1
              variants={fadeUp}
              className="text-black leading-tight text-left"
              style={{
                fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                fontWeight: 700,
                fontSize: "36px",
                lineHeight: "1.3",
              }}
            >
              Smarter <span className="text-[#F94049]">Apparel Management</span>{" "}
              Starts Here
            </motion.h1>

            {/* Mobile Description */}
            <motion.p
              variants={fadeUp}
              className="text-black leading-relaxed text-left"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            >
              Gain full control of your production cycle with advanced
              dashboards, real-time tracking, reporting, and powerful admin
              tools all in one system
            </motion.p>

            {/* Mobile Button */}
            <motion.div variants={fadeUp} className="pt-2">
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="bg-[#F94049] hover:bg-red-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg w-full"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  letterSpacing: "0.5px",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                CONTACT US
              </motion.button>
            </motion.div>

            {/* Mobile Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <motion.img
                src="/images/tryit.png"
                alt="Hero Illustration"
                className="w-full h-auto object-contain rounded-lg"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right Image - Desktop Only */}
          <motion.div
            className="hidden lg:block lg:flex-1 w-full max-w-xl xl:max-w-2xl mx-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src="/images/tryit.png"
              alt="Hero Illustration"
              className="w-full h-auto object-contain rounded-lg"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
