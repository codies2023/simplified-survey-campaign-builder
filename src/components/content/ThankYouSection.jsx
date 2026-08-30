import Accordion from "../common/Accordion";
import Toggle from "../common/Toggle";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import { useEffect } from "react";
import { useSurvey } from "../../hooks/useSurvey";
export default function ThankYouSection() {
  const { state, dispatch } = useSurvey();
  const t = state.content.thankYou,
    set = (patch) => dispatch({ type: "UPDATE_THANK_YOU", patch });
  useEffect(() => {
    const mediaUrl = t.media;
    return () => {
      if (mediaUrl?.startsWith("blob:")) URL.revokeObjectURL(mediaUrl);
    };
  }, [t.media]);
  const upload = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!f.type.startsWith("image/")) return;
    const url = URL.createObjectURL(f);
    if (t.media?.startsWith("blob:")) URL.revokeObjectURL(t.media);
    set({ media: url, mediaType: f.type });
  };
  return (
    <Accordion title="Thank You Page">
      <Toggle
        label="Enable Thank You Page"
        checked={t.enabled}
        onChange={(v) => set({ enabled: v })}
      />
      {t.enabled && (
        <div className="control-stack">
          <label className="field">
            <span>Upload Media (PNG/JPG/JPEG/GIF)</span>
            <input
              type="file"
              accept="image/png,image/jpeg,image/gif"
              onChange={upload}
            />
          </label>
          <TextInput
            label="Thank You Title"
            value={t.title}
            onChange={(v) => set({ title: v })}
          />
          <TextInput
            label="Thank You Description"
            value={t.subtitle}
            onChange={(v) => set({ subtitle: v })}
          />
          <TextInput
            label="CTA Button Text"
            value={t.buttonText}
            onChange={(v) => set({ buttonText: v })}
          />
          <SelectInput
            label="Redirect Type"
            value={t.redirectType}
            onChange={(v) => set({ redirectType: v })}
            options={["URL", "None"]}
          />
          {t.redirectType === "URL" && (
            <TextInput
              label="Redirect URL"
              placeholder="https://example.com"
              value={t.redirectUrl}
              onChange={(v) => set({ redirectUrl: v })}
            />
          )}
        </div>
      )}
    </Accordion>
  );
}
