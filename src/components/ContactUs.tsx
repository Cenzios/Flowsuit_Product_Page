import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section
      id="contact"
      className="relative min-h-[60vh] overflow-hidden bg-white lg:bg-[#FFE4DE]"
    >
      {/* Gradient background for mobile only */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFE4DE] to-[#FFD4CC] lg:hidden" />

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
          {/* Left Image - Desktop */}
          <motion.div
            className="flex-1 w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.85, x: -50 }}
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

              {/* Production Floor Image */}
              <motion.img
                src="/images/product.png"
                alt="Production Floor"
                className="relative w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
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
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-100 rounded-full blur-xl opacity-50"
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

          {/* Right Content - Desktop */}
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
                Ready to Power Up Production?
              </motion.h2>

              <motion.p
                className="text-gray-700 leading-relaxed max-w-xl"
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
                Get a personalized walkthrough and see how to save time, cut
                costs, and grow your apparel business today.
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.div
              className="flex justify-start pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
            >
              <motion.a
                href="tel:+94711186028"
                className="bg-[#FF4757] hover:bg-[#FF3545] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-10 py-4 uppercase tracking-wide inline-block text-center"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  letterSpacing: "1px",
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Layout: Header → Description → Button (No Image) */}
        <div className="lg:hidden w-full space-y-6 ">
          {/* Mobile Header */}
          <motion.h2
            className="text-black leading-tight font-bold text-center"
            style={{
              fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
              fontSize: "28px",
              lineHeight: "1.3",
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            Ready to Power Up Production?
          </motion.h2>

          {/* Mobile Description */}
          <motion.p
            className="text-black leading-relaxed text-center p-5"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "1.7",
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
          >
            Get a personalized walkthrough and see how to save time, cut costs,
            and grow your apparel business today.
          </motion.p>

          {/* Mobile CTA Button */}
          <motion.div
            className="pt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          >
            <motion.a
              href="tel:+94711186028"
              className="bg-[#FF4757] hover:bg-[#FF3545] text-white font-bold rounded-lg shadow-lg w-full py-3 uppercase tracking-wide text-center block"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                letterSpacing: "1px",
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
