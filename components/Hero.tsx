"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
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
    <section className="hero" ref={sectionRef}>
      <div className="hero-noise" />
      <div className="hero-deco" />
      <div className="hero-tag fade-in">Beta · 베타 운영 중</div>
      <h1
        className="fade-in"
        style={{ fontFamily: "var(--font-bebas)" }}
      >
        FAST CASUAL
        <em>FULLY MANAGED</em>
      </h1>
      <p
        className="hero-ko fade-in"
        style={{ fontFamily: "var(--font-noto)" }}
      >
        한인 캐주얼 레스토랑을 위한 올인원 운영 플랫폼
      </p>
      <p className="hero-sub fade-in">
        Built for Korean-owned fast casual restaurants. Self-order kiosk, POS,
        online ordering, kitchen display — and AI-powered Google Review responses
        in English.
      </p>
      <p
        className="hero-sub-ko fade-in"
        style={{ fontFamily: "var(--font-noto)" }}
      >
        줄 세우지 말고, 키오스크로 받으세요. 영어 리뷰도 AI가 대신 답변합니다.
      </p>
      <div className="hero-actions fade-in">
        <a
          href="#beta"
          className="btn-primary"
          style={{ fontFamily: "var(--font-noto)" }}
        >
          베타 무료 신청하기
        </a>
        <a href="#features" className="btn-secondary">
          기능 보기
        </a>
      </div>
      <div className="hero-stats fade-in">
        <div>
          <div
            className="stat-num"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            2×
          </div>
          <div className="stat-label">Table Turnover</div>
          <div
            className="stat-ko"
            style={{ fontFamily: "var(--font-noto)" }}
          >
            테이블 회전율 향상
          </div>
        </div>
        <div>
          <div
            className="stat-num"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            0%
          </div>
          <div className="stat-label">Commission</div>
          <div
            className="stat-ko"
            style={{ fontFamily: "var(--font-noto)" }}
          >
            직접 주문 수수료 없음
          </div>
        </div>
        <div>
          <div
            className="stat-num"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            AI
          </div>
          <div className="stat-label">Review Auto-Reply</div>
          <div
            className="stat-ko"
            style={{ fontFamily: "var(--font-noto)" }}
          >
            영문 리뷰 자동 답변
          </div>
        </div>
      </div>
    </section>
  );
}
