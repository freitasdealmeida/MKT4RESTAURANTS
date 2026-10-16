import Link from 'next/link';

export default function ServicesPage() {
  return (
    <article className="services-page">
      {/* Manifesto Hero Section */}
      <section className="manifesto-hero">
        <div className="container">
          <h1 className="reveal-text">
            <span>We have the solution for you!</span>
          </h1>
          <p className="manifesto-text">
            Wherever your restaurant is or whatever food you sell we can help you to get more clients and increase your sales.
          </p>
        </div>
      </section>

      {/* Products / Services Section */}
      <section id="products" className="products services-navigation-section">
        <div className="container">
          <span className="badge">HOW WE CAN HELP</span>
          <h2>Services</h2>

          <div className="service-links-grid">
            <Link href="/services/strategic-communication" className="service-card">
              <div className="service-card-header">
                <span className="service-number">01</span>
              </div>
              <h3>Strategic Communication</h3>
              <p>PR, brand positioning, and story-driven messaging built to elevate prestige.</p>
            </Link>

            <Link href="/services/photography-for-restaurants" className="service-card">
              <div className="service-card-header">
                <span className="service-number">02</span>
              </div>
              <h3>Photography for Restaurants</h3>
              <p>High-impact visual storytelling engineered to drive curiosity and fill tables.</p>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}