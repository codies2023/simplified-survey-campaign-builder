import { useEffect, useState } from "react";
import SurveyPreview from "./SurveyPreview";
import { useSurvey } from "../../hooks/useSurvey";
import { radius } from "../../utils/styleHelpers";
export default function MobilePreview() {
  const { state, dispatch } = useSurvey(),
    a = state.styling.appearance,
    c = state.styling.crossButton;
  const [isVisible, setIsVisible] = useState(a.displayDelay === 0);

  useEffect(() => {
    const delay = Math.max(0, Number(a.displayDelay) || 0) * 1000;
    setIsVisible(delay === 0);
    if (!delay) return undefined;
    const timer = window.setTimeout(() => setIsVisible(true), delay);
    return () => window.clearTimeout(timer);
  }, [a.displayDelay]);

  const backdrop = `${a.backdropColor}${Math.round(
    (Math.max(0, Math.min(10, Number(a.backdropOpacity) || 0)) / 100) * 255,
  )
    .toString(16)
    .padStart(2, "0")}`;
  return (
    <div className="phone-wrap" style={{ backgroundColor: backdrop }}>
      <div className="phone">
        <div className="notch" />
        <div
          className="screen"
          style={{
            background: a.backgroundColor,
            borderRadius: radius(a.radius),
          }}
        >
          {isVisible && c.enabled && !state.preview.isClosed && (
            <button
              className={`close ${c.style}`}
              onClick={() => dispatch({ type: "CLOSE_SURVEY" })}
              style={{
                width: c.size,
                height: c.size,
                color: c.crossColor,
                background: c.fillColor,
                borderColor: c.strokeColor,
                top: 35 + (c.margin.top || 0) - (c.margin.bottom || 0),
                right: 15 + (c.margin.right || 0) - (c.margin.left || 0),
              }}
            >
              ×
            </button>
          )}
          {isVisible ? (
            <SurveyPreview />
          ) : (
            <div className="delayed">Survey will appear shortly…</div>
          )}
        </div>
      </div>
    </div>
  );
}
