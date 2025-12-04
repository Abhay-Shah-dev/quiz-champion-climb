import { motion } from "framer-motion";
import { Trophy, Star, Home, RotateCcw } from "lucide-react";

interface VictoryScreenProps {
  badges: string[];
  onRestart: () => void;
}

export const VictoryScreen = ({ badges, onRestart }: VictoryScreenProps) => {
  const badgeColors = ["bronze", "silver", "gold"];

  const getBadgeGradient = (color: string) => {
    switch (color) {
      case "bronze":
        return "var(--gradient-bronze)";
      case "silver":
        return "var(--gradient-silver)";
      case "gold":
        return "var(--gradient-gold)";
      default:
        return "var(--gradient-primary)";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Confetti effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            background: `hsl(${Math.random() * 360} 70% 60%)`,
            left: `${Math.random() * 100}%`,
            top: "100%",
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            rotate: [0, 720],
            opacity: [1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="text-center z-10"
      >
        {/* Trophy animation */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <div
            className="w-40 h-40 rounded-full mx-auto flex items-center justify-center animate-pulse-glow"
            style={{ background: "var(--gradient-gold)" }}
          >
            <Trophy className="w-20 h-20 text-background" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 gradient-accent-text">
            Quiz Champion!
          </h1>
          <p className="text-muted-foreground text-xl mb-12">
            You've conquered all levels!
          </p>
        </motion.div>

        {/* Badges showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-3xl p-8 mb-8 max-w-md mx-auto"
        >
          <h2 className="font-display text-2xl font-semibold mb-6 flex items-center justify-center gap-2">
            <Star className="w-6 h-6 text-warning" />
            Your Collection
          </h2>
          
          <div className="flex justify-center gap-6">
            {badges.map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.7 + index * 0.2, type: "spring" }}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                  style={{ background: getBadgeGradient(badgeColors[index]) }}
                >
                  <Trophy className="w-10 h-10 text-background" />
                </div>
                <span className="text-sm font-medium">{badge}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={onRestart}
            className="px-8 py-4 rounded-2xl font-display font-semibold text-primary-foreground flex items-center justify-center gap-2"
            style={{ background: "var(--gradient-primary)" }}
          >
            <RotateCcw className="w-5 h-5" />
            Play Again
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
