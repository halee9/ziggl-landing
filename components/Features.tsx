"use client";

import { useEffect, useRef } from "react";
import {
  Monitor,
  Tablet,
  Globe,
  ChefHat,
  Package,
  Bot,
} from "lucide-react";

const features = [
  {
    num: "01",
    icon: <Monitor />,
    title: "POS System",
    ko: "포스 시스템",
    desc: "Fast, reliable point-of-sale built for Korean restaurant workflows. Supports Square & Stripe payments with real-time order management.",
    highlight: false,
  },
  {
    num: "02",
    icon: <Tablet />,
    title: "Self-Order Kiosk",
    ko: "셀프 주문 키오스크",
    desc: "The heart of fast casual. Customers order themselves — no waiting, no miscommunication. Bilingual (EN/KO) with photo menus. Shorter lines, faster turns.",
    highlight: false,
  },
  {
    num: "03",
    icon: <Globe />,
    title: "Online Orders",
    ko: "온라인 주문",
    desc: "Your own branded online ordering page. No third-party commissions. Direct to your kitchen, direct to your pocket.",
    highlight: false,
  },
  {
    num: "04",
    icon: <ChefHat />,
    title: "Kitchen Display (KDS)",
    ko: "주방 디스플레이",
    desc: "Real-time kitchen display system. Orders from POS, Kiosk, and Online flow seamlessly to your kitchen screen.",
    highlight: false,
  },
  {
    num: "05",
    icon: <Package />,
    title: "Inventory Management",
    ko: "재고 관리",
    desc: "Track stock levels, set alerts, and manage suppliers. OCR receipt scanning for instant inventory updates.",
    highlight: false,
  },
  {
    num: "NEW",
    icon: <Bot />,
    title: "AI Review Responder",
    ko: "구글 리뷰 자동 답변",
    desc: "AI reads your Google reviews, drafts professional English responses, and sends them to Telegram for one-tap approval. No English skills needed.",
    highlight: true,
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => entry.target.classList.add("visible"),
              i * 70
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    sectionRef.current
      ?.querySelectorAll(".fade-in")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="features-section" id="features" ref={sectionRef}>
      <p className="section-label fade-in">Core Platform</p>
      <h2
        className="section-title fade-in"
        style={{ fontFamily: "var(--font-bebas)" }}
      >
        BUILT FOR
        <br />
        FAST CASUAL
      </h2>
      <p
        className="section-ko fade-in"
        style={{ fontFamily: "var(--font-noto)" }}
      >
        빠른 서비스, 높은 회전율을 위한 모든 도구
      </p>
      <div className="features-grid">
        {features.map((f) => (
          <div
            key={f.num}
            className={`feature-card fade-in${f.highlight ? " highlight" : ""}`}
          >
            <div className="feature-num">{f.num}</div>
            <div className="feature-icon">{f.icon}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p
              className="feature-ko"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              {f.ko}
            </p>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
