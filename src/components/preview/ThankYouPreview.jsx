import { textStyle } from "../../utils/styleHelpers";
import PreviewButton from "./PreviewButton";
import { useSurvey } from "../../hooks/useSurvey";
export default function ThankYouPreview() {
  const { state } = useSurvey(),
    t = state.content.thankYou,
    s = state.styling.thankYou;
  const go = () => {
    if (t.redirectType === "URL" && /^https?:\/\/.+/i.test(t.redirectUrl))
      window.open(t.redirectUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="thank-preview">
      {t.media && (
        <img
          src={t.media}
          alt="Thank you media"
          style={{
            width: s.image.width,
            height: s.image.height,
            objectFit: "contain",
            margin: `${s.image.margin?.top || 0}px ${s.image.margin?.right || 0}px ${s.image.margin?.bottom || 0}px ${s.image.margin?.left || 0}px`,
          }}
        />
      )}
      <h2 style={textStyle(s.title)}>{t.title}</h2>
      <p style={textStyle(s.subtitle)}>{t.subtitle}</p>
      <PreviewButton style={s.button} onClick={go}>
        {t.buttonText}
      </PreviewButton>
    </div>
  );
}
