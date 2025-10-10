import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface TryFreeSectionProps {
  scrollToSection?: (sectionId: string) => void;
}

const TryFreeSection = ({ scrollToSection }: TryFreeSectionProps) => {
  const features = [
    "Full Access to Core Modules",
    "One-on-One Training Session",
    "Priority Support",
  ];

  return (
    <section
      id="try-free"
      className="relative bg-[#F5F3F0] min-h-[60vh] overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-gray-50 rounded-full blur-3xl opacity-50"
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-red-50 rounded-full blur-3xl opacity-30"
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row items-center gap-16 min-h-[60vh]">
          {/* Left Content - Desktop */}
          <motion.div
            className="flex-1 w-full space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Header */}
            <div className="space-y-5">
              <motion.h2
                className="text-black leading-tight font-bold"
                style={{
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  fontSize: "44px",
                  lineHeight: "1.2",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                Try It <span className="text-[#FF4757]">Free</span> for 2 Months
              </motion.h2>

              <motion.p
                className="text-black leading-relaxed max-w-xl"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "1.7",
                }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeInOut" }}
              >
                We're offering a free 2-month demo of our advanced apparel
                management system! Try it now to see how it can simplify your
                work, improve efficiency, and make managing production easier.
              </motion.p>
            </div>

            {/* What's Included Header */}
            <motion.h3
              className="text-black font-bold"
              style={{
                fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                fontSize: "18px",
              }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeInOut" }}
            >
              What's Included in Your Free Demo?
            </motion.h3>

            {/* Features List */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 group justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.35 + index * 0.1,
                    ease: "easeInOut",
                  }}
                  whileHover={{ x: 3 }}
                >
                  <motion.div
                    className="flex-shrink-0 mt-0.5"
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                    </div>
                  </motion.div>
                  <p
                    className="text-black leading-relaxed text-left font-medium"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "16px",
                      lineHeight: "1.6",
                    }}
                  >
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="flex justify-start pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeInOut" }}
            >
              <motion.button
                className="bg-[#FF4757] hover:bg-[#FF3545] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-10 py-4 uppercase tracking-wide"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  letterSpacing: "1px",
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection && scrollToSection("contact")}
              >
                Schedule My Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image - Desktop */}
          <motion.div
            className="flex-1 w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.85, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              {/* Subtle shadow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent blur-2xl rounded-lg transform translate-y-8"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Woman with Laptop Image */}
              <motion.img
                src="/images/girl.png"
                alt="Try FlowSuite Free Demo"
                className="relative w-full h-auto object-contain drop-shadow-2xl"
                initial={{ filter: "brightness(0.95)" }}
                whileInView={{ filter: "brightness(1)" }}
                transition={{ duration: 0.8 }}
              />

              {/* Corner accent */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-red-100 rounded-full blur-xl opacity-60"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Bottom left accent */}
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-100 rounded-full blur-xl opacity-50"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Layout: Header → Image → Description → Question → Points → Button */}
        <div className="lg:hidden w-full space-y-6">
          {/* Mobile Header */}
          <motion.h2
            className="text-black leading-tight font-bold text-center"
            style={{
              fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
              fontSize: "24px",
              lineHeight: "1.3",
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            Try It <span className="text-[#FF4757]">Free</span> for 2 Months
          </motion.h2>

          {/* Mobile Image */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
          >
            <motion.div className="relative">
              {/* Subtle shadow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent blur-2xl rounded-lg transform translate-y-4"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Woman with Laptop Image */}
              <motion.img
                src="/images/girl.png"
                alt="Try FlowSuite Free Demo"
                className="relative w-full h-auto object-contain drop-shadow-2xl"
                initial={{ filter: "brightness(0.95)" }}
                whileInView={{ filter: "brightness(1)" }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          </motion.div>

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
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          >
            We're offering a free 2-month demo of our advanced apparel
            management system! Try it now to see how it can simplify your work,
            improve efficiency, and make managing production easier.
          </motion.p>

          {/* Mobile What's Included Header */}
          <motion.h3
            className="text-black font-bold text-left pt-2"
            style={{
              fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
              fontSize: "16px",
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
          >
            What's Included in Your Free Demo?
          </motion.h3>

          {/* Mobile Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 justify-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1,
                  ease: "easeInOut",
                }}
              >
                <motion.div className="flex-shrink-0 mt-0.5">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                  </div>
                </motion.div>
                <p
                  className="text-black leading-relaxed text-left font-medium"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <motion.div
            className="pt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeInOut" }}
          >
            <motion.button
              className="bg-[#FF4757] hover:bg-[#FF3545] text-white font-bold rounded-lg shadow-lg w-full py-3 uppercase tracking-wide"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                letterSpacing: "1px",
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection && scrollToSection("contact")}
            >
              Schedule My Demo
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TryFreeSection;
