import QuestionPreview from "./QuestionPreview";
import ThankYouPreview from "./ThankYouPreview";
import { useSurvey } from "../../hooks/useSurvey";
export default function SurveyPreview() {
  const { state } = useSurvey(),
    p = state.preview;
  if (p.isClosed) return <div className="closed">Survey Closed</div>;
  if (p.showThankYou) return <ThankYouPreview />;
  return (
    <QuestionPreview
      question={state.content.questions[p.currentQuestion] || {}}
      index={p.currentQuestion}
    />
  );
}
