import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Package,
  Shirt,
  Scissors,
  Printer,
  Hand,
  Box,
  X,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Import your step components
import StepsForOrders from "./StepsForOrders";
import DesignManagement from "./DesignManagement";
import CutterSection from "./CutterSection";
import PrintingSection from "./PrintingSection";
import PressingSection from "./PressingSection";

// ---------------- Departments Section ----------------
const DepartmentsSection = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const scrollPosition = useRef<number>(0); // Store scroll position

  // Prevent body scroll when panel is open
  useEffect(() => {
    if (activePanel) {
      scrollPosition.current = window.scrollY; // Save current scroll
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll position correctly
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollPosition.current);
    }
  }, [activePanel]);

  const departments = [
    {
      id: "customer",
      icon: Package,
      title: "Customer Dashboard",
      description: "Customers can easily place orders through the dashboard",
    },
    {
      id: "design",
      icon: Shirt,
      title: "Design",
      description: "Job completed, status updated, and passed to the next step",
    },
    {
      id: "cutting",
      icon: Scissors,
      title: "Cutting",
      description: "Track Issues and Transfer Cuts instantly",
    },
    {
      id: "printing",
      icon: Printer,
      title: "Printing",
      description: "Update print statuses, report damages, and track orders.",
    },
    {
      id: "pressing",
      icon: Hand,
      title: "Pressing",
      description: "Update status, report issues, and track progress.",
    },
    {
      id: "packing",
      icon: Box,
      title: "Packing",
      description: "Prepare deliveries",
    },
  ];

  const renderPanelContent = () => {
    switch (activePanel) {
      case "customer":
        return <StepsForOrders />;
      case "design":
        return <DesignManagement />;
      case "cutting":
        return <CutterSection />;
      case "printing":
        return <PrintingSection />;
      case "pressing":
        return <PressingSection />;
      default:
        return null;
    }
  };

  return (
    <section id="departments" className="relative min-h-screen bg-[#F2F0E9]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <motion.div className="text-center mb-12 lg:mb-16">
          <motion.p className="text-[#FF4757] font-bold tracking-wider mb-4">
            EACH STEP, ORGANIZED
          </motion.p>
          <motion.h2 className="text-black font-bold text-2xl lg:text-[44px]">
            Streamline Your Production
            <br />
            With Dedicated Departments
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {departments.map((dept) => (
            <motion.div
              key={dept.id}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl cursor-pointer"
              whileHover={{ y: -8 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                  <dept.icon className="w-8 h-8 text-gray-700" />
                </div>
              </div>
              <h3 className="text-[#FF4757] font-bold mb-3 text-xl">
                {dept.title}
              </h3>
              <p className="text-gray-700 mb-6">{dept.description}</p>
              {dept.id !== "packing" && (
                <button
                  onClick={() => setActivePanel(dept.id)}
                  className="flex items-center gap-2 text-[#FF4757] font-semibold"
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Slide-in Panels */}
      <AnimatePresence>
        {activePanel && renderPanelContent() && (
          <>
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
              onClick={() => setActivePanel(null)}
            />

            {/* Panel fully flush on all sides */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full lg:w-[60%] xl:w-[55%] bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Close Button at exact top-right corner */}
              <motion.button
                onClick={() => setActivePanel(null)}
                className="absolute top-0 right-0 z-[60] m-2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6 text-gray-700" />
              </motion.button>

              {/* Content with no extra padding */}
              <div className="w-full h-full">{renderPanelContent()}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DepartmentsSection;
