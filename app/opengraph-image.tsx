import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nehal Naik — AI/ML Technology Leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Gradient accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #7C6EF8, #B8AEFF)",
          }}
        />
        {/* Logo monogram */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "12px",
              background: "#7C6EF8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            NN
          </div>
          <span style={{ color: "#8B8AA3", fontSize: "18px" }}>Nehal Naik</span>
        </div>

        {/* Eyebrow */}
        <div
          style={{
            color: "#7C6EF8",
            fontSize: "14px",
            fontWeight: "600",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          AI / ML Technology Leader
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#F0EFF8",
            fontSize: "60px",
            fontWeight: "600",
            lineHeight: "1.05",
            letterSpacing: "-0.03em",
            marginBottom: "24px",
          }}
        >
          Building AI that{" "}
          <span style={{ color: "#7C6EF8", fontStyle: "italic" }}>actually ships.</span>
        </div>

        {/* Sub */}
        <div style={{ color: "#8B8AA3", fontSize: "20px", lineHeight: "1.6", maxWidth: "700px" }}>
          Executive-level AI/ML leadership for Risk, Insurance, and Finance.
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "12px", marginTop: "40px" }}>
          {["Risk", "Insurance", "Finance", "LLMs", "Google Cloud"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "6px 14px",
                borderRadius: "6px",
                background: "#2D2652",
                color: "#7C6EF8",
                fontSize: "13px",
                fontFamily: "monospace",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
