export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="nav-brand" style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
        <img
          src="/ziggl-logo-transparent.svg"
          alt="Ziggl"
          className="nav-logo"
        />
        <span
          className="nav-wordmark"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          ZIG<span>GL</span>
        </span>
      </div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#reviews">Review AI</a></li>
        <li><a href="#why">Why Ziggl</a></li>
      </ul>
      <a
        href="#beta"
        className="nav-cta"
        style={{ fontFamily: "var(--font-noto)" }}
      >
        베타 신청 · Early Access
      </a>
    </nav>
  );
}
