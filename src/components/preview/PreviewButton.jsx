import { radius } from "../../utils/styleHelpers";
export default function PreviewButton({ style, children, onClick }) {
  const margin = style.margin || {};
  const alignment =
    style.alignment === "left"
      ? "flex-start"
      : style.alignment === "right"
        ? "flex-end"
        : "center";

  return (
    <button
      className="preview-cta"
      onClick={onClick}
      style={{
        width: style.fullWidth ? "100%" : style.width,
        height: style.height,
        color: style.textColor,
        background: style.backgroundColor,
        border: `${style.borderWidth}px solid ${style.borderColor}`,
        borderRadius: radius(style.radius),
        fontSize: style.fontSize,
        fontWeight: style.bold ? 700 : style.fontWeight,
        fontStyle: style.italic ? "italic" : "normal",
        textAlign: style.alignment,
        alignSelf: style.fullWidth ? "stretch" : alignment,
        margin: `${margin.top || 0}px ${margin.right || 0}px ${margin.bottom || 0}px ${margin.left || 0}px`,
      }}
    >
      {children}
    </button>
  );
}
