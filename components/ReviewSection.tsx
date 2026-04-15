"use client";

import { useEffect, useRef } from "react";
import { Zap, Check, Pencil, SkipForward } from "lucide-react";

export default function ReviewSection() {
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
    <section className="review-section" id="reviews" ref={sectionRef}>
      <div className="review-inner">
        <div>
          <p className="section-label fade-in">AI-Powered</p>
          <h2
            className="section-title fade-in"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            REVIEW
            <br />
            AUTOPILOT
          </h2>
          <p
            className="section-ko fade-in"
            style={{ fontFamily: "var(--font-noto)" }}
          >
            구글 리뷰 자동화
          </p>
          <p className="review-desc fade-in">
            English reviews are hard. Replying to every one is even harder.
            Ziggl&apos;s AI reads each review, understands the sentiment, and
            drafts a perfect response.
          </p>
          <p
            className="review-desc-ko fade-in"
            style={{ fontFamily: "var(--font-noto)" }}
          >
            영어 리뷰 걱정 끝. AI가 분석하고 초안을 작성해 드립니다. 버튼 하나로
            전문적인 영문 답변을 발송하세요.
          </p>
          <div className="review-steps">
            <div className="review-step fade-in">
              <div
                className="step-num"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                1
              </div>
              <div>
                <div className="step-title">New review detected</div>
                <div className="step-desc">
                  Monitors your Google Business Profile automatically every 30
                  minutes.
                </div>
                <div
                  className="step-ko"
                  style={{ fontFamily: "var(--font-noto)" }}
                >
                  구글 리뷰 자동 감지 (30분마다)
                </div>
              </div>
            </div>
            <div className="review-step fade-in">
              <div
                className="step-num"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                2
              </div>
              <div>
                <div className="step-title">AI drafts a response</div>
                <div className="step-desc">
                  Claude AI analyzes sentiment and writes a professional,
                  personalized English reply.
                </div>
                <div
                  className="step-ko"
                  style={{ fontFamily: "var(--font-noto)" }}
                >
                  AI가 영문 답변 초안 자동 작성
                </div>
              </div>
            </div>
            <div className="review-step fade-in">
              <div
                className="step-num"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                3
              </div>
              <div>
                <div className="step-title">You approve on Telegram</div>
                <div className="step-desc">
                  Get a Korean summary + English draft. One tap to send, edit,
                  or skip.
                </div>
                <div
                  className="step-ko"
                  style={{ fontFamily: "var(--font-noto)" }}
                >
                  텔레그램에서 버튼 하나로 승인 · 수정 · 건너뛰기
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Telegram Mockup */}
        <div className="tg-mockup fade-in">
          <div className="tg-header">
            <div className="tg-avatar">
              <Zap />
            </div>
            <div>
              <div className="tg-name">Ziggl Review Bot</div>
              <div className="tg-status">● online</div>
            </div>
          </div>
          <div className="tg-body">
            <div className="tg-msg">
              <div className="stars">⭐⭐⭐⭐⭐ 새 구글 리뷰</div>
              <div className="reviewer">
                👤 John Smith &nbsp;·&nbsp; 🏪 Seoul Kitchen
              </div>
              <div className="review-body">
                &ldquo;The bibimbap was amazing and the portions were huge! Service
                was super fast too. Definitely coming back!&rdquo;
              </div>
              <hr className="divider" />
              <div
                className="analysis"
                style={{ fontFamily: "var(--font-noto)" }}
              >
                🤖 AI 분석: 매우 긍정적 — 음식 품질, 빠른 서비스 칭찬
              </div>
              <div className="draft">
                💬 &ldquo;Thank you so much, John! We&apos;re so glad you enjoyed
                the bibimbap and our fast service. We can&apos;t wait to see you
                again soon!&rdquo;
              </div>
            </div>
          </div>
          <div className="tg-buttons">
            <button type="button" className="tg-btn">
              <Check /> <span style={{ fontFamily: "var(--font-noto)" }}>발송</span>
            </button>
            <button type="button" className="tg-btn">
              <Pencil /> <span style={{ fontFamily: "var(--font-noto)" }}>수정</span>
            </button>
            <button type="button" className="tg-btn">
              <SkipForward /> <span style={{ fontFamily: "var(--font-noto)" }}>건너뛰기</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
