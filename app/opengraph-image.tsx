import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const alt =
  "Ziggl — Restaurant Management for Korean-owned Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const bebasNeue = await readFile(
    path.join(process.cwd(), "public/fonts/BebasNeue.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f4f1eb",
          padding: "64px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 배경 장식 원 */}
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -80,
            width: 580,
            height: 580,
            borderRadius: "50%",
            border: "1px solid rgba(42,92,63,0.12)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -40,
            width: 480,
            height: 480,
            borderRadius: "50%",
            border: "1px solid rgba(42,92,63,0.07)",
            display: "flex",
          }}
        />

        {/* 왼쪽 녹색 액센트 바 */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 8,
            background: "#2a5c3f",
            display: "flex",
          }}
        />

        {/* 콘텐츠 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            width: "100%",
          }}
        >
          {/* 상단: 로고 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: "Bebas Neue",
                fontSize: 36,
                letterSpacing: 6,
                color: "#111110",
              }}
            >
              ZIG
            </span>
            <span
              style={{
                fontFamily: "Bebas Neue",
                fontSize: 36,
                letterSpacing: 6,
                color: "#2a5c3f",
              }}
            >
              GL
            </span>
            <div
              style={{
                marginLeft: 16,
                background: "#e8f5ee",
                border: "1px solid rgba(42,92,63,0.25)",
                borderRadius: 100,
                padding: "6px 18px",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 2,
                color: "#2a5c3f",
                display: "flex",
              }}
            >
              BETA
            </div>
          </div>

          {/* 메인 헤드라인 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <span
              style={{
                fontFamily: "Bebas Neue",
                fontSize: 128,
                lineHeight: 0.9,
                letterSpacing: 4,
                color: "#111110",
              }}
            >
              FAST CASUAL
            </span>
            <span
              style={{
                fontFamily: "Bebas Neue",
                fontSize: 128,
                lineHeight: 0.9,
                letterSpacing: 4,
                color: "#2a5c3f",
              }}
            >
              FULLY MANAGED
            </span>
          </div>

          {/* 하단: 설명 + URL */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <span
              style={{
                fontSize: 22,
                color: "#555550",
                maxWidth: 600,
                lineHeight: 1.6,
              }}
            >
              한인 캐주얼 레스토랑을 위한 올인원 운영 플랫폼
            </span>
            <span
              style={{
                fontFamily: "Bebas Neue",
                fontSize: 28,
                letterSpacing: 3,
                color: "#88887f",
              }}
            >
              ziggl.app
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Bebas Neue",
          data: bebasNeue,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
