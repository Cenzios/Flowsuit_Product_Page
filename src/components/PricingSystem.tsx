import { motion } from "framer-motion";
import { Check } from "lucide-react";

const AdvancedPricingSection = () => {
  const features = [
    <>
      Easily calculate and view prices for any combination of Product, Fabric,
      Size, and Quantity.
      <br />
      <strong>
        Example: <br /> T-shirt × Wet-look × Kids Size × XL × (Front + Print +
        Press) × Quantity{" "}
      </strong>
    </>,
    "Easily manage all pricing details without complex setup.",
  ];

  const badges = [
    { label: "Prices by Pattern Type, Size", position: "-top-10 -left-2" },
    { label: "Clear price format", position: "-top-0 -right-2" },
    { label: "Multiple Sizes", position: "-bottom-10 -left-0" },
  ];

  return (
    <section
      id="pricing"
      className="relative bg-[#F5F3F0] overflow-hidden min-h-[60vh]"
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Content */}
          <motion.div
            className="w-full lg:flex-1 space-y-8 order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="space-y-4 sm:space-y-5">
              <h2
                className="text-black leading-tight text-2xl sm:text-3xl md:text-[26px] font-bold"
                style={{
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  lineHeight: "1.3",
                }}
              >
                Advanced Pricing System
              </h2>
              <p
                className="text-black leading-relaxed text-base sm:text-[16px] md:text-[17px] font-normal"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: "1.7",
                }}
              >
                Prices for each fabric type and product, including dimensions
                such as Product, Fabric, Type, Size, Peace, and Quantity, are
                displayed in an easy-to-read format. This makes it simple to
                check and manage all pricing details at a glance.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-5 pt-3 sm:pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start justify-start gap-3 mx-auto lg:mx-0 max-w-md sm:max-w-none"
                >
                  <motion.div
                    className="flex-shrink-0 mt-1"
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
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full lg:flex-1 max-w-2xl order-1 lg:order-2 relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{ perspective: "1000px" }}
          >
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

            {/* Pricing Image */}
            <motion.img
              src="/images/pricing.png"
              alt="FlowSuite Advanced Pricing System"
              className="relative w-full h-auto object-contain drop-shadow-2xl rounded-lg z-10"
              initial={{ rotateY: -5 }}
              whileInView={{ rotateY: 0 }}
              transition={{ duration: 0.8 }}
            />

            {/* Decorative glows */}
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
            Advanced Pricing System
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
            Prices for each fabric type and product, including dimensions such
            as Product, Fabric, Type, Size, Peace, and Quantity, are displayed
            in an easy-to-read format. This makes it simple to check and manage
            all pricing details at a glance.
          </motion.p>

          {/* Mobile Image with Badges */}
          <motion.div
            className="relative w-full pt-12 pb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div className="relative">
              {/* Top Left - Prices by Pattern Type, Size */}
              <motion.div
                className="absolute -top-15 left-6 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-medium px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-red-500 stroke-[3]" />
                  </span>
                  Prices by <br />
                  Pattern Type <br /> and Size
                </div>
              </motion.div>

              {/* Top Right - Clear price format */}
              <motion.div
                className="absolute -top-4 right-6 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-medium px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-red-500 stroke-[3]" />
                  </span>
                  Clear price <br /> format
                </div>
              </motion.div>

              {/* Bottom Left - Multiple Sizes */}
              <motion.div
                className="absolute bottom-0 left-6 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-medium px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-red-500 stroke-[3]" />
                  </span>
                  Multiple Sizes
                </div>
              </motion.div>

              {/* Main Image */}
              <motion.img
                src="/images/6.png"
                alt="FlowSuite Advanced Pricing System"
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

export default AdvancedPricingSection;
