"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";

type FormState = "idle" | "loading" | "success" | "error";

export default function BetaForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    const { error } = await supabase.from("beta_signups").insert({
      email: data.get("email") as string,
      contact_name: data.get("contact_name") as string,
      restaurant_name: data.get("restaurant_name") as string,
      restaurant_address: data.get("restaurant_address") as string,
      phone: data.get("phone") as string,
    });

    if (error) {
      setState("error");
      setMessage("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      setTimeout(() => setState("idle"), 4000);
    } else {
      setState("success");
      setMessage("신청 완료! 빠른 시일 내에 연락드리겠습니다 😊");
      form.reset();
    }
  }

  return (
    <section className="cta-section" id="beta" ref={sectionRef}>
      <p className="section-label fade-in">Early Access</p>
      <h2
        className="section-title fade-in"
        style={{ fontFamily: "var(--font-bebas)" }}
      >
        JOIN THE
        <br />
        BETA
      </h2>
      <p
        className="cta-ko fade-in"
        style={{ fontFamily: "var(--font-noto)" }}
      >
        베타 테스터를 모집합니다 — 지금 무료로 시작하세요
      </p>

      <form className="beta-form fade-in" onSubmit={handleSubmit}>
        {state !== "idle" && state !== "loading" && (
          <div className={`beta-message ${state}`}>
            <span style={{ fontFamily: "var(--font-noto)" }}>{message}</span>
          </div>
        )}
        <div className="beta-fields">
          <div className="beta-field">
            <label
              className="beta-label"
              htmlFor="contact_name"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              담당자 이름 *
            </label>
            <input
              id="contact_name"
              name="contact_name"
              type="text"
              className="beta-input"
              placeholder="홍길동"
              required
            />
          </div>
          <div className="beta-field">
            <label
              className="beta-label"
              htmlFor="email"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              이메일 *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="beta-input"
              placeholder="example@email.com"
              required
            />
          </div>
          <div className="beta-field">
            <label
              className="beta-label"
              htmlFor="restaurant_name"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              레스토랑 이름 *
            </label>
            <input
              id="restaurant_name"
              name="restaurant_name"
              type="text"
              className="beta-input"
              placeholder="영문 상호명을 입력해 주세요 (예: Seoul Kitchen)"
              required
            />
          </div>
          <div className="beta-field">
            <label
              className="beta-label"
              htmlFor="phone"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              전화번호 *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="beta-input"
              placeholder="(555) 123-4567"
              required
            />
          </div>
          <div className="beta-field full">
            <label
              className="beta-label"
              htmlFor="restaurant_address"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              비지니스 주소 *
            </label>
            <input
              id="restaurant_address"
              name="restaurant_address"
              type="text"
              className="beta-input"
              placeholder="123 Main St, Seattle, WA 98101"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="beta-submit"
          disabled={state === "loading" || state === "success"}
          style={{ fontFamily: "var(--font-noto)" }}
        >
          {state === "loading"
            ? "처리 중..."
            : state === "success"
            ? "✓ 신청 완료"
            : "베타 신청하기"}
        </button>
      </form>

      <p className="beta-note fade-in">
        Free during beta · No credit card required
        <br />
        <span
          className="ko"
          style={{ fontFamily: "var(--font-noto)" }}
        >
          베타 기간 무료 · 신용카드 불필요
        </span>
      </p>
    </section>
  );
}
