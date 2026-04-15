export default function Footer() {
  return (
    <footer className="site-footer">
      <div
        className="footer-logo"
        style={{ fontFamily: "var(--font-bebas)" }}
      >
        ZIG<span>GL</span>
      </div>
      <div>
        <div className="footer-text">
          © 2026 Ziggl. Built for Korean-owned restaurants.
        </div>
        <div
          className="footer-ko"
          style={{ fontFamily: "var(--font-noto)" }}
        >
          한인 식당을 위해 만들어졌습니다
        </div>
      </div>
    </footer>
  );
}
