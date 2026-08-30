import Accordion from "../common/Accordion";
import TextInput from "../common/TextInput";
import Toggle from "../common/Toggle";
import QuestionOptions from "./QuestionOptions";
import ConditionalLogic from "./ConditionalLogic";
import { useSurvey } from "../../hooks/useSurvey";
export default function QuestionSection({ question, index }) {
  const { dispatch } = useSurvey();
  const set = (k, v) =>
    dispatch({ type: "UPDATE_QUESTION", id: question.id, patch: { [k]: v } });
  return (
    <Accordion title={`Question ${index + 1}`}>
      <TextInput
        label="Question Title"
        value={question.title}
        onChange={(v) => set("title", v)}
      />
      <TextInput
        label="Question Subtitle / Description"
        value={question.subtitle}
        onChange={(v) => set("subtitle", v)}
      />
      <QuestionOptions question={question} />
      <Toggle
        label="Enable Additional Comments"
        checked={question.additionalComments}
        onChange={(v) => set("additionalComments", v)}
      />
      <ConditionalLogic question={question} />
      <TextInput
        label="Button Text"
        value={question.buttonText}
        onChange={(v) => set("buttonText", v)}
      />
    </Accordion>
  );
}
