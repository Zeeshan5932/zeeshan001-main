import { AnimatePresence, motion } from "framer-motion";
import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.96 }}
      className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-2 text-sm font-semibold text-foreground theme-transition hover:border-primary/40 hover:shadow-lg"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "dark" : "light"}
          initial={{ opacity: 0, scale: 0.8, y: 4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -4 }}
          transition={{ duration: 0.18 }}
          className="flex items-center gap-2"
        >
          {isDark ? <SunMedium size={16} /> : <MoonStar size={16} />}
          <span className="hidden sm:inline">{isDark ? "Light mode" : "Dark mode"}</span>
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;