import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { Question } from "@/data/quizData";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
}

export const QuestionCard = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuestionCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (option: string) => {
    if (showResult) return;
    
    setSelectedAnswer(option);
    setShowResult(true);
    
    const isCorrect = option === question.answer;
    
    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedAnswer(null);
      setShowResult(false);
    }, 1500);
  };

  const getOptionStyle = (option: string) => {
    if (!showResult) {
      return "glass hover:border-primary/50 hover:scale-[1.02]";
    }
    
    if (option === question.answer) {
      return "bg-success/20 border-success glow-success";
    }
    
    if (option === selectedAnswer && option !== question.answer) {
      return "bg-destructive/20 border-destructive glow-destructive animate-shake";
    }
    
    return "glass opacity-50";
  };

  const optionLabels = ["A", "B", "C", "D"];

  return (
    <motion.div
      key={question.question}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Question {questionNumber} of {totalQuestions}</span>
          <span>{Math.round((questionNumber / totalQuestions) * 100)}%</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "var(--gradient-primary)" }}
            initial={{ width: `${((questionNumber - 1) / totalQuestions) * 100}%` }}
            animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="glass rounded-3xl p-8 mb-6">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-center">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence mode="wait">
          {question.options.map((option, index) => (
            <motion.button
              key={option}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleSelect(option)}
              disabled={showResult}
              className={`relative p-5 rounded-2xl border-2 border-transparent text-left transition-all duration-300 ${getOptionStyle(option)}`}
            >
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center font-display font-semibold">
                  {optionLabels[index]}
                </span>
                <span className="font-medium text-lg flex-1">{option}</span>
                
                {showResult && option === question.answer && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-8 h-8 rounded-full bg-success flex items-center justify-center"
                  >
                    <Check className="w-5 h-5 text-success-foreground" />
                  </motion.div>
                )}
                
                {showResult && option === selectedAnswer && option !== question.answer && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-8 h-8 rounded-full bg-destructive flex items-center justify-center"
                  >
                    <X className="w-5 h-5 text-destructive-foreground" />
                  </motion.div>
                )}
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
