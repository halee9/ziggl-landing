export default function Nav() {
  return (
    <nav className="site-nav">
      <div
        className="nav-logo"
        style={{ fontFamily: "var(--font-bebas)" }}
      >
        ZIG<span>GL</span>
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
