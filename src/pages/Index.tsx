import { QuizGame } from "@/components/quiz/QuizGame";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Quiz Master - Test Your Knowledge</title>
        <meta name="description" content="Challenge yourself with Quiz Master! Test your knowledge across 3 difficulty levels and collect badges." />
      </Helmet>
      <QuizGame />
    </>
  );
};

export default Index;
