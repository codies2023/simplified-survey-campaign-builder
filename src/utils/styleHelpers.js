export const textStyle = (s = {}) => ({
  color: s.color ?? s.textColor ?? "#000000",
  fontFamily: s.fontFamily || "Inter",
  fontSize: s.fontSize ?? 14,
  fontWeight: s.bold ? 700 : (s.fontWeight ?? 400),
  fontStyle: s.italic ? "italic" : "normal",
  textDecoration: s.underline ? "underline" : "none",
  textAlign: s.alignment || "left",
  margin: `${s.margin?.top ?? 0}px ${s.margin?.right ?? 0}px ${s.margin?.bottom ?? 0}px ${s.margin?.left ?? 0}px`,
});
export const radius = (r) =>
  typeof r === "number"
    ? `${r}px`
    : `${r?.tl || 0}px ${r?.tr || 0}px ${r?.br || 0}px ${r?.bl || 0}px`;
