import { motion } from "framer-motion";
import { Trophy, Lock, Check, ChevronRight } from "lucide-react";
import { Level } from "@/data/quizData";

interface LevelSelectProps {
  levels: Level[];
  unlockedLevels: number[];
  completedLevels: number[];
  onSelectLevel: (levelId: number) => void;
  badges: string[];
}

export const LevelSelect = ({
  levels,
  unlockedLevels,
  completedLevels,
  onSelectLevel,
  badges,
}: LevelSelectProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-success";
      case "Medium":
        return "text-warning";
      case "Hard":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        <h2 className="font-display text-4xl font-bold text-center mb-2 gradient-text">
          Choose Level
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          Complete each level to unlock the next
        </p>

        {badges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-2xl p-4 mb-8 flex items-center justify-center gap-4"
          >
            <span className="text-sm text-muted-foreground">Your Badges:</span>
            {badges.map((badge, index) => (
              <div
                key={badge}
                className="flex items-center gap-2 px-3 py-1 rounded-full"
                style={{ background: getBadgeGradient(levels[index]?.badgeColor || "bronze") }}
              >
                <Trophy className="w-4 h-4 text-background" />
                <span className="text-sm font-medium text-background">{badge}</span>
              </div>
            ))}
          </motion.div>
        )}

        <div className="space-y-4">
          {levels.map((level, index) => {
            const isUnlocked = unlockedLevels.includes(level.id);
            const isCompleted = completedLevels.includes(level.id);

            return (
              <motion.button
                key={level.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => isUnlocked && onSelectLevel(level.id)}
                disabled={!isUnlocked}
                className={`w-full glass rounded-2xl p-6 text-left transition-all duration-300 ${
                  isUnlocked
                    ? "hover:scale-[1.02] hover:border-primary/50 cursor-pointer"
                    : "opacity-50 cursor-not-allowed"
                } ${isCompleted ? "border-success/30" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        isCompleted
                          ? ""
                          : isUnlocked
                          ? "bg-secondary"
                          : "bg-muted"
                      }`}
                      style={
                        isCompleted
                          ? { background: getBadgeGradient(level.badgeColor) }
                          : undefined
                      }
                    >
                      {isCompleted ? (
                        <Check className="w-7 h-7 text-background" />
                      ) : isUnlocked ? (
                        <span className="font-display font-bold text-xl">{level.id}</span>
                      ) : (
                        <Lock className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-xl mb-1">
                        {level.name}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className={`text-sm font-medium ${getDifficultyColor(level.difficulty)}`}>
                          {level.difficulty}
                        </span>
                        <span className="text-muted-foreground text-sm">•</span>
                        <span className="text-muted-foreground text-sm">
                          {level.questions.length} Questions
                        </span>
                      </div>
                    </div>
                  </div>

                  {isUnlocked && !isCompleted && (
                    <ChevronRight className="w-6 h-6 text-primary" />
                  )}

                  {isCompleted && (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-success/20">
                      <Trophy className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium text-success">Completed</span>
                    </div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
