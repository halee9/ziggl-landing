"use client";

import { useEffect, useRef } from "react";
import { Zap, Heart, Banknote, Wifi } from "lucide-react";

const cards = [
  {
    icon: <Zap />,
    title: "Faster Table Turns",
    ko: "테이블 회전율 향상",
    desc: "Kiosk ordering eliminates the bottleneck at the counter. Customers order the moment they walk in — no staff needed to take orders.",
    accent: true,
  },
  {
    icon: <Heart />,
    title: "Korean-First Design",
    ko: "한국어 우선 설계",
    desc: "Built by Korean-American restaurant operators. Every feature reflects how Korean casual restaurants actually run.",
    accent: false,
  },
  {
    icon: <Banknote />,
    title: "Cut Commissions",
    ko: "배달 수수료 절감",
    desc: "Your own online ordering page means zero 30% commissions to Uber Eats or DoorDash. Every dollar goes back to you.",
    accent: false,
  },
  {
    icon: <Wifi />,
    title: "Manage Remotely",
    ko: "원격 관리",
    desc: "Monitor sales, reviews, and kitchen status from your phone — whether you're at home or across town.",
    accent: false,
  },
];

export default function WhySection() {
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
    <section className="why-section" id="why" ref={sectionRef}>
      <p className="section-label fade-in">Why Ziggl</p>
      <h2
        className="section-title fade-in"
        style={{ fontFamily: "var(--font-bebas)" }}
      >
        LESS WAIT,
        <br />
        MORE TABLES
      </h2>
      <p
        className="section-ko fade-in"
        style={{ fontFamily: "var(--font-noto)" }}
      >
        줄을 줄이고, 회전율을 높이세요
      </p>
      <div className="why-grid">
        {cards.map((c) => (
          <div
            key={c.title}
            className={`why-card fade-in${c.accent ? " accent-card" : ""}`}
          >
            <div className="why-icon">{c.icon}</div>
            <h3 className="why-title">{c.title}</h3>
            <p
              className="why-ko"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              {c.ko}
            </p>
            <p className="why-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
