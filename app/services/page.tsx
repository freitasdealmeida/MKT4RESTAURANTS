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
      <section id="products" className="products">
        <div className="container">
          <h2>How we can help</h2>
          <ul>
            <li>
              <Link href="/services/strategic-communication">
                Strategic Communication
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}