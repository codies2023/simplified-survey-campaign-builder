import Toggle from "../common/Toggle";
import SelectInput from "../common/SelectInput";
import { useSurvey } from "../../hooks/useSurvey";
export default function ConditionalLogic({ question }) {
  const { state, dispatch } = useSurvey();
  const update = (p) =>
    dispatch({ type: "UPDATE_QUESTION", id: question.id, patch: p });
  return (
    <div className="logic">
      <Toggle
        label="Enable Conditional Logic"
        checked={question.logic.enabled}
        onChange={(v) => update({ logic: { ...question.logic, enabled: v } })}
      />
      {question.logic.enabled && (
        <>
          <p className="hint">
            Mock branching UI; conditions are stored in state.
          </p>
          {question.logic.conditions.map((c) => (
            <div className="grid2" key={c.id}>
              <SelectInput
                label="If selected"
                value={c.optionId}
                onChange={(v) =>
                  dispatch({
                    type: "UPDATE_CONDITION",
                    questionId: question.id,
                    id: c.id,
                    patch: { optionId: v },
                  })
                }
                options={question.options.map((o) => ({
                  value: o.id,
                  label: o.text,
                }))}
              />
              <SelectInput
                label="Then go to"
                value={String(c.target)}
                onChange={(v) =>
                  dispatch({
                    type: "UPDATE_CONDITION",
                    questionId: question.id,
                    id: c.id,
                    patch: { target: +v },
                  })
                }
                options={state.content.questions.map((_, i) => ({
                  value: String(i + 1),
                  label: `Question ${i + 1}`,
                }))}
              />
            </div>
          ))}
          <button
            className="secondary"
            onClick={() => dispatch({ type: "ADD_CONDITION", id: question.id })}
          >
            + Add Condition
          </button>
        </>
      )}
    </div>
  );
}
