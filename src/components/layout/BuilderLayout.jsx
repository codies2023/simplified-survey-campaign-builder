import { useState } from "react";
import ContentPanel from "../content/ContentPanel";
import StylingPanel from "../styling/StylingPanel";
import MobilePreview from "../preview/MobilePreview";
export default function BuilderLayout() {
  const [tab, setTab] = useState("content");
  return (
    <main className="builder">

      <section className="config">
        <div className="tabs">
          <button
            className={tab === "content" ? "active" : ""}
            onClick={() => setTab("content")}
          >
            Content
          </button>
          <button
            className={tab === "styling" ? "active" : ""}
            onClick={() => setTab("styling")}
          >
            Styling
          </button>
        </div>
        {tab === "content" ? <ContentPanel /> : <StylingPanel />}
      </section>
      <aside className="preview-pane">
       <div className="preview-header">
          <h3>
            <span className="live-dot"></span>
            Live Mobile Preview
          </h3>
          <p>Changes update instantly</p>
      </div>
        <MobilePreview />
      </aside>
    </main>
  );
}
