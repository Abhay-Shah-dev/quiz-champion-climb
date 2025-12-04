import { motion } from "framer-motion";
import { Trophy, XCircle, ArrowRight, RotateCcw, Home } from "lucide-react";
import { Level } from "@/data/quizData";

interface ResultScreenProps {
  level: Level;
  score: number;
  passed: boolean;
  isLastLevel: boolean;
  onRetry: () => void;
  onNextLevel: () => void;
  onHome: () => void;
}

export const ResultScreen = ({
  level,
  score,
  passed,
  isLastLevel,
  onRetry,
  onNextLevel,
  onHome,
}: ResultScreenProps) => {
  const percentage = Math.round((score / level.questions.length) * 100);

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
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
        className="text-center max-w-md w-full"
      >
        {/* Result Icon */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          {passed ? (
            <div
              className="w-32 h-32 rounded-full mx-auto flex items-center justify-center"
              style={{ background: getBadgeGradient(level.badgeColor) }}
            >
              <Trophy className="w-16 h-16 text-background" />
            </div>
          ) : (
            <div className="w-32 h-32 rounded-full mx-auto flex items-center justify-center bg-destructive/20">
              <XCircle className="w-16 h-16 text-destructive" />
            </div>
          )}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`font-display text-4xl font-bold mb-2 ${
            passed ? "gradient-text" : "text-destructive"
          }`}
        >
          {passed ? "Congratulations!" : "Try Again!"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground text-lg mb-8"
        >
          {passed
            ? `You've completed ${level.name}!`
            : `You need ${level.requiredScore}/10 to pass`}
        </motion.p>

        {/* Score Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-3xl p-8 mb-8"
        >
          <div className="text-6xl font-display font-bold mb-2">
            {score}/{level.questions.length}
          </div>
          <div className="text-muted-foreground">
            {percentage}% Correct
          </div>

          {/* Progress ring visual */}
          <div className="mt-6 flex justify-center">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke={passed ? "hsl(var(--success))" : "hsl(var(--destructive))"}
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "251.2", strokeDashoffset: 251.2 }}
                  animate={{ strokeDashoffset: 251.2 - (251.2 * percentage) / 100 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display font-bold text-xl">{percentage}%</span>
              </div>
            </div>
          </div>

          {passed && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 flex items-center justify-center gap-2 px-4 py-2 rounded-full"
              style={{ background: getBadgeGradient(level.badgeColor) }}
            >
              <Trophy className="w-5 h-5 text-background" />
              <span className="font-medium text-background">{level.badge} Earned!</span>
            </motion.div>
          )}
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col gap-3"
        >
          {passed ? (
            <>
              {isLastLevel ? (
                <button
                  onClick={onHome}
                  className="w-full py-4 rounded-2xl font-display font-semibold text-primary-foreground flex items-center justify-center gap-2"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <Trophy className="w-5 h-5" />
                  View All Badges
                </button>
              ) : (
                <button
                  onClick={onNextLevel}
                  className="w-full py-4 rounded-2xl font-display font-semibold text-primary-foreground flex items-center justify-center gap-2"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  Next Level
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={onHome}
                className="w-full py-4 rounded-2xl font-display font-medium glass hover:bg-secondary/50 transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Back to Levels
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onRetry}
                className="w-full py-4 rounded-2xl font-display font-semibold text-primary-foreground flex items-center justify-center gap-2"
                style={{ background: "var(--gradient-primary)" }}
              >
                <RotateCcw className="w-5 h-5" />
                Try Again
              </button>
              <button
                onClick={onHome}
                className="w-full py-4 rounded-2xl font-display font-medium glass hover:bg-secondary/50 transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Back to Levels
              </button>
            </>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
