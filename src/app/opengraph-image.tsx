import { ImageResponse } from "next/og";

export const alt = "Ethan Nguyen, Computer Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0b0b1a, #4f46e5)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 700 }}>
            Ethan Nguyen
        </div>

        <div style={{ fontSize: 40, marginTop: 24, opacity: 0.85 }}>
        From Lego's to Engineer,
        </div>
        
        <div style={{ fontSize: 40, marginTop: 24, opacity: 0.85 }}>
        graduated with B.S. in Computer Engineer
        </div>
      </div>
    ),
    size
  );
}