import TextInput from "../common/TextInput";
import { useSurvey } from "../../hooks/useSurvey";
export default function QuestionOptions({ question }) {
  const { dispatch } = useSurvey();
  return (
    <div className="options-editor">
      <b>Options</b>
      {question.options.map((o, i) => (
        <div className="option-edit" key={o.id}>
          <TextInput
            label={`Option ${i + 1}`}
            value={o.text}
            onChange={(text) =>
              dispatch({
                type: "UPDATE_OPTION",
                questionId: question.id,
                optionId: o.id,
                text,
              })
            }
          />
          <button
            disabled={question.options.length <= 2}
            onClick={() =>
              dispatch({
                type: "DELETE_OPTION",
                questionId: question.id,
                optionId: o.id,
              })
            }
          >
            ×
          </button>
        </div>
      ))}
      <button
        className="secondary"
        onClick={() =>
          dispatch({ type: "ADD_OPTION", questionId: question.id })
        }
      >
        + Add Option
      </button>
    </div>
  );
}
