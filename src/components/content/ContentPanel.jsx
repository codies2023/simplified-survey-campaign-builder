import IntroductionSection from "./IntroductionSection";
import QuestionSection from "./QuestionSection";
import ThankYouSection from "./ThankYouSection";
import { useSurvey } from "../../hooks/useSurvey";
export default function ContentPanel() {
  const { state } = useSurvey();
  return (
    <div>
      <IntroductionSection />
      {state.content.questions.map((q, i) => (
        <QuestionSection key={q.id} question={q} index={i} />
      ))}
      <ThankYouSection />
    </div>
  );
}
