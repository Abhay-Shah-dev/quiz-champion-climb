import { motion } from "framer-motion";
import { Trophy, Sparkles, Brain, Zap } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <Brain className="w-24 h-24 text-primary mx-auto" />
            <Sparkles className="w-8 h-8 text-warning absolute -top-2 -right-2 animate-pulse" />
          </div>
        </motion.div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 gradient-text">
          Quiz Master
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto mb-12">
          Test your knowledge across 3 challenging levels and collect badges!
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-badge-bronze/20 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-badge-bronze" />
            </div>
            <span className="text-sm font-medium">Bronze</span>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-badge-silver/20 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-badge-silver" />
            </div>
            <span className="text-sm font-medium">Silver</span>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="glass rounded-2xl p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-badge-gold/20 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-badge-gold" />
            </div>
            <span className="text-sm font-medium">Gold</span>
          </motion.div>
        </div>

        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-12 py-4 rounded-2xl font-display font-semibold text-xl text-primary-foreground overflow-hidden"
          style={{ background: "var(--gradient-primary)" }}
        >
          <span className="relative z-10 flex items-center gap-3">
            <Zap className="w-6 h-6" />
            Start Quiz
          </span>
          <motion.div
            className="absolute inset-0 bg-foreground/10"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />
        </motion.button>

        <p className="text-muted-foreground text-sm mt-6">
          Score 7/10 or higher to pass each level
        </p>
      </motion.div>
    </div>
  );
};
