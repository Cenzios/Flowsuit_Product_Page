import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface InvoicingSystemSectionProps {}

const InvoicingSystemSection = ({}: InvoicingSystemSectionProps) => {
  const features = [
    "Automated invoices generate",
    "Create a single invoice for multiple orders/items",
    "Add discounts, manage customer payments, track due orders",
    "Secure and customizable invoicing templates",
  ];

  return (
    <section
      id="features"
      className="relative min-h-[60vh] bg-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Desktop Header */}
        <motion.div
          className="hidden lg:block text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            className="text-red-500 font-bold tracking-wider mb-4"
            style={{
              fontSize: "14px",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            KEY FEATURES
          </motion.p>
          <motion.h2
            className="text-black font-bold leading-tight max-w-4xl mx-auto text-[44px]"
            style={{
              fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
              lineHeight: "1.2",
            }}
          >
            Tools That Make Work Faster & Smarter
          </motion.h2>
        </motion.div>

        {/* Desktop Content */}
        <div className="hidden lg:flex flex-row items-center gap-16">
          {/* Left Image with Labels - Desktop */}
          <motion.div
            className="relative flex-1 w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.85, x: -40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02, rotateY: -2 }}
              transition={{ duration: 0.3 }}
              style={{ perspective: "1000px" }}
            >
              {/* Invoice Image */}
              <motion.div
                className="relative"
                initial={{ rotateY: 5 }}
                whileInView={{ rotateY: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/images/invoice.png"
                  alt="FlowSuite Smart Invoicing System"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Red/Orange Labels with White Checkmarks */}
              {/* Top Left */}
              <motion.div
                className="absolute -top-6 -left-2 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-sm font-medium px-3 py-1 rounded-lg shadow-xl flex items-center gap-2 drop-shadow-lg">
                  <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-red-500 stroke-[3]" />
                  </span>
                  Multiple Order Selection
                </div>
              </motion.div>

              {/* Top Right */}
              <motion.div
                className="absolute -top-7 right-8 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.65 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-sm font-medium px-3 py-1 rounded-lg shadow-xl flex items-center gap-2 drop-shadow-lg">
                  <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-red-500 stroke-[3]" />
                  </span>
                  Invoice
                </div>
              </motion.div>

              {/* Bottom Left */}
              <motion.div
                className="absolute -bottom-3 left-15 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-sm font-medium px-3 py-1 rounded-lg shadow-xl flex items-center gap-2 drop-shadow-lg">
                  <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-red-500 stroke-[3]" />
                  </span>
                  Discounts
                </div>
              </motion.div>

              {/* Bottom Right */}
              <motion.div
                className="absolute -bottom-4 right-0 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.95 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-sm font-medium px-3 py-1 rounded-lg shadow-xl flex items-center gap-2 drop-shadow-lg">
                  <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-red-500 stroke-[3]" />
                  </span>
                  Easy Invoice Generate
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Desktop */}
          <motion.div
            className="flex-1 w-full space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Section Header */}
            <div className="space-y-4">
              <h3 className="text-black font-bold leading-tight text-[26px]">
                Smart Invoicing System
              </h3>
              <p className="text-black leading-relaxed text-[16px]">
                Streamline billing with our Smart Invoicing system eliminating
                errors, speeding up payments, and ensuring financial
                transparency for smooth cash flow and a better customer
                experience.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-5 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 justify-start"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="flex-shrink-0 mt-0.5"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-[#46A834] flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-white stroke-[5]" />
                    </div>
                  </motion.div>
                  <p className="text-black leading-relaxed text-left text-[16px]">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout: Rocket → KEY FEATURES → Header → Description → Image → Points */}

        <div className="lg:hidden w-full space-y-6 mt-50">
          {/* Mobile Rocket Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          ></motion.div>

          {/* Mobile KEY FEATURES Label */}
          <motion.p
            className="text-red-500 font-bold tracking-wider text-center"
            style={{
              fontSize: "20px",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.1em",
            }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            KEY FEATURES
          </motion.p>

          {/* Mobile Main Header */}
          <motion.p
            className="text-black leading-tight text-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "1.6",
            }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Boost productivity with powerful tools designed to simplify tasks,
            speed up workflows, and help you work smarter every day
          </motion.p>

          {/* Mobile Section Header */}
          <motion.h3
            className="text-black font-bold leading-tight text-left pt-2"
            style={{
              fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
              fontSize: "28px",
              lineHeight: "1.3",
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Smart Invoicing System
          </motion.h3>

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
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Streamline billing with our Smart Invoicing system eliminating
            errors, speeding up payments, and ensuring financial transparency
            for smooth cash flow and a better customer experience.
          </motion.p>

          {/* Mobile Invoice Image with Labels */}
          <motion.div
            className="relative w-full pt-10 pb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div className="relative">
              {/* Invoice Image */}
              <img
                src="/images/1.png"
                alt="FlowSuite Smart Invoicing System"
                className="w-full h-auto object-contain drop-shadow-xl"
              />

              {/* Mobile Labels - Adjusted positions */}
              {/* Top Left */}
              <motion.div
                className="absolute -top-12 left-2 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-medium px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-red-500 stroke-[3]" />
                  </span>
                  Multiple Order <br /> Selection
                </div>
              </motion.div>

              {/* Top Right */}
              <motion.div
                className="absolute -top-5 right-2 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-medium px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-red-500 stroke-[3]" />
                  </span>
                  Invoice
                </div>
              </motion.div>

              {/* Bottom Left */}
              <motion.div
                className="absolute -bottom-2 left-12 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-medium px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-red-500 stroke-[3]" />
                  </span>
                  Discounts
                </div>
              </motion.div>

              {/* Bottom Right */}
              <motion.div
                className="absolute bottom-2 right-2 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-medium px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-red-500 stroke-[3]" />
                  </span>
                  Easy Invoice <br /> generate
                </div>
              </motion.div>
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
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <motion.div className="flex-shrink-0 mt-0.5">
                  <div className="w-5 h-5 rounded-full bg-[#46A834]  flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white stroke-[5]" />
                  </div>
                </motion.div>
                <p
                  className="text-black leading-relaxed text-left"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
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

export default InvoicingSystemSection;
