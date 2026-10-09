export default function HomePage() {
  return (
    <article className="home-page">
      <section className="manifesto-hero">
        <div className="container">
          <h1 className="reveal-text">
            <span>Want to drive more clients to your restaurant?</span> <br /> We can help!
          </h1>
          <p className="manifesto-text">
            In an era of digital noise, your restaurant deserves to be the signal. We believe photography should taste like the first bite, and consulting should feel like a direct ROI.
          </p>
        </div>
      </section>

      <section id="contact" className="cta-contact-section">
        <div className="container">
          <div className="form-container">
            <h2>Ready to scale?</h2>
            
            <form className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="contact@restaurant.com" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell us about your restaurant</label>
                <textarea id="message" name="message" rows={4} placeholder="Your restaurant name, location, or goals..." required></textarea>
              </div>

              <button type="submit" className="cta-btn submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </article>
  );
}