import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#08090B",
          color: "#F4F1EA",
          fontSize: 16,
          fontFamily: "monospace",
          fontWeight: 700,
          border: "1px solid rgba(255, 255, 255, 0.22)",
          borderRadius: 4,
          letterSpacing: "-0.5px",
        }}
      >
        HP
      </div>
    ),
    {
      ...size,
    }
  );
}
