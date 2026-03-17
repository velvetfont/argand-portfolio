import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Argand — Infraestructura Digital · Gabriel Moreno";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fontData = await fetch(
    "https://fonts.gstatic.com/s/spacemono/v13/i7dPIFZifjKcF5UAWdDRYEF8RQ.woff2"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#07080a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          position: "relative",
        }}
      >
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Amber border */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: "1px solid rgba(245,158,11,0.12)",
          }}
        />

        {/* Top tag */}
        <div
          style={{
            display: "flex",
            marginBottom: "32px",
            fontFamily: "Space Mono",
            fontSize: "16px",
            color: "rgba(245,158,11,0.5)",
            letterSpacing: "3px",
          }}
        >
          // ARGAND.MX · CDMX · MÉXICO
        </div>

        {/* ARGAND_ logotype */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "0px",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              fontFamily: "Space Mono",
              fontSize: "120px",
              fontWeight: 700,
              color: "#f59e0b",
              letterSpacing: "-4px",
              lineHeight: 1,
            }}
          >
            ARGAND
          </span>
          <span
            style={{
              fontFamily: "Space Mono",
              fontSize: "120px",
              fontWeight: 700,
              color: "#f59e0b",
              letterSpacing: "-4px",
              lineHeight: 1,
              animation: "none",
            }}
          >
            _
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: "Space Mono",
            fontSize: "22px",
            color: "rgba(224,230,236,0.55)",
            letterSpacing: "1px",
            marginBottom: "48px",
          }}
        >
          Infraestructura Digital · Integración IA · Consultoría Técnica
        </div>

        {/* Bottom divider + name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "1px",
              backgroundColor: "rgba(245,158,11,0.4)",
            }}
          />
          <span
            style={{
              fontFamily: "Space Mono",
              fontSize: "14px",
              color: "rgba(224,230,236,0.3)",
              letterSpacing: "2px",
            }}
          >
            GABRIEL MORENO AZCONA
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Mono",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
