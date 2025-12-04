import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { levels, Level } from "@/data/quizData";
import { WelcomeScreen } from "./WelcomeScreen";
import { LevelSelect } from "./LevelSelect";
import { QuestionCard } from "./QuestionCard";
import { ResultScreen } from "./ResultScreen";
import { VictoryScreen } from "./VictoryScreen";

type GameState = "welcome" | "levelSelect" | "playing" | "result" | "victory";

export const QuizGame = () => {
  const [gameState, setGameState] = useState<GameState>("welcome");
  const [currentLevel, setCurrentLevel] = useState<Level | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1]);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [badges, setBadges] = useState<string[]>([]);

  const handleStart = () => {
    setGameState("levelSelect");
  };

  const handleSelectLevel = (levelId: number) => {
    const level = levels.find((l) => l.id === levelId);
    if (level) {
      setCurrentLevel(level);
      setCurrentQuestionIndex(0);
      setScore(0);
      setGameState("playing");
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentLevel && currentQuestionIndex < currentLevel.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setGameState("result");
    }
  };

  const handleRetry = () => {
    if (currentLevel) {
      setCurrentQuestionIndex(0);
      setScore(0);
      setGameState("playing");
    }
  };

  const handleNextLevel = () => {
    if (currentLevel) {
      const nextLevelId = currentLevel.id + 1;
      const nextLevel = levels.find((l) => l.id === nextLevelId);
      if (nextLevel) {
        setCurrentLevel(nextLevel);
        setCurrentQuestionIndex(0);
        setScore(0);
        setGameState("playing");
      }
    }
  };

  const handleLevelComplete = () => {
    if (currentLevel) {
      const passed = score >= currentLevel.requiredScore;
      
      if (passed) {
        if (!completedLevels.includes(currentLevel.id)) {
          setCompletedLevels((prev) => [...prev, currentLevel.id]);
          setBadges((prev) => [...prev, currentLevel.badge]);
        }

        const nextLevelId = currentLevel.id + 1;
        if (nextLevelId <= levels.length && !unlockedLevels.includes(nextLevelId)) {
          setUnlockedLevels((prev) => [...prev, nextLevelId]);
        }

        if (currentLevel.id === levels.length) {
          setGameState("victory");
          return;
        }
      }
    }
    setGameState("result");
  };

  const handleHome = () => {
    setGameState("levelSelect");
  };

  const handleRestart = () => {
    setUnlockedLevels([1]);
    setCompletedLevels([]);
    setBadges([]);
    setGameState("welcome");
  };

  // Check if level is complete when we reach result state
  if (gameState === "playing" && currentLevel && currentQuestionIndex >= currentLevel.questions.length) {
    handleLevelComplete();
  }

  const passed = currentLevel ? score >= currentLevel.requiredScore : false;
  const isLastLevel = currentLevel?.id === levels.length;

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {gameState === "welcome" && (
          <WelcomeScreen key="welcome" onStart={handleStart} />
        )}

        {gameState === "levelSelect" && (
          <LevelSelect
            key="levelSelect"
            levels={levels}
            unlockedLevels={unlockedLevels}
            completedLevels={completedLevels}
            onSelectLevel={handleSelectLevel}
            badges={badges}
          />
        )}

        {gameState === "playing" && currentLevel && (
          <div key="playing" className="min-h-screen flex items-center justify-center p-6">
            <QuestionCard
              question={currentLevel.questions[currentQuestionIndex]}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={currentLevel.questions.length}
              onAnswer={handleAnswer}
            />
          </div>
        )}

        {gameState === "result" && currentLevel && (
          <ResultScreen
            key="result"
            level={currentLevel}
            score={score}
            passed={passed}
            isLastLevel={isLastLevel}
            onRetry={handleRetry}
            onNextLevel={handleNextLevel}
            onHome={handleHome}
          />
        )}

        {gameState === "victory" && (
          <VictoryScreen
            key="victory"
            badges={badges}
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
