import { useSurvey } from "../../hooks/useSurvey";
import { textStyle } from "../../utils/styleHelpers";
export default function OptionPreview({ option, question }) {
  const { state, dispatch } = useSurvey(),
    s = state.styling.options,
    selected = state.preview.selectedOptions[question.id] === option.id,
    v = selected ? s.selected : s.unselected,
    textValue = {
      ...v,
      color: v.color ?? v.textColor ?? "#000000",
      margin: {},
    };

  return (
    <button
      className={`preview-option ${selected ? "selected" : ""} ${s.layout}`}
      style={{
        height: s.optionHeight,
        marginBottom: s.optionSpacing,
        borderRadius: s.borderRadius,
        border: `${v.borderWidth}px solid ${v.borderColor}`,
        background: v.backgroundColor,
        ...textStyle(textValue),
      }}
      onClick={() =>
        dispatch({
          type: "SELECT_OPTION",
          questionId: question.id,
          optionId: option.id,
        })
      }
    >
      <span className="bullet" style={{ marginRight: s.bulletSpacing }}>
        {selected ? "✓" : s.layout === "checkbox" ? "□" : "○"}
      </span>
      {option.text}
    </button>
  );
}
