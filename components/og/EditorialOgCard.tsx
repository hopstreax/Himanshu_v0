import React from "react";

interface EditorialOgCardProps {
  badge?: string;
  title: string;
  subtitle: string;
  tags?: readonly string[];
  footerNote?: string;
}

export function EditorialOgCard({
  badge = "PORTFOLIO ARCHIVE",
  title,
  subtitle,
  tags = [],
  footerNote = "Full Stack AI Developer · Open Source Contributor",
}: EditorialOgCardProps) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#F9F8F5",
        padding: "48px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Outer framing border container */}
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid #E5E2DA",
          borderRadius: "16px",
          padding: "44px 48px",
          backgroundColor: "#FAF9F6",
        }}
      >
        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                fontSize: "13px",
                fontFamily: "monospace",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#111111",
                fontWeight: 600,
              }}
            >
              HIMANSHU PATRO
            </span>
            <span style={{ color: "#D8D4C8" }}>/</span>
            <span
              style={{
                fontSize: "12px",
                fontFamily: "monospace",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#73716D",
              }}
            >
              {badge}
            </span>
          </div>

          <span
            style={{
              fontSize: "13px",
              fontFamily: "monospace",
              color: "#8C8984",
              letterSpacing: "1px",
            }}
          >
            himanshupatro.dev
          </span>
        </div>

        {/* Center Editorial Focus */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          <h1
            style={{
              fontSize: title.length > 24 ? "48px" : "56px",
              fontWeight: 700,
              color: "#111111",
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              margin: 0,
              padding: 0,
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#73716D",
              lineHeight: 1.4,
              maxWidth: "960px",
              margin: 0,
              padding: 0,
            }}
          >
            {subtitle}
          </p>

          {/* Technology / Keyword Badges */}
          {tags && tags.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "8px",
              }}
            >
              {tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "12px",
                    fontFamily: "monospace",
                    padding: "5px 12px",
                    borderRadius: "6px",
                    backgroundColor: "#F1EFEA",
                    border: "1px solid #E5E2DA",
                    color: "#111111",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Status / Architectural Rule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #E5E2DA",
            paddingTop: "18px",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              color: "#73716D",
              letterSpacing: "0.2px",
            }}
          >
            {footerNote}
          </span>

          <span
            style={{
              fontSize: "12px",
              fontFamily: "monospace",
              color: "#8C8984",
              letterSpacing: "1px",
            }}
          >
            2026 · PORTFOLIO
          </span>
        </div>
      </div>
    </div>
  );
}
