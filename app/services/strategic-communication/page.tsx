export default function StrategicCommunicationPage() {
  return (
    <article className="strategic-comm-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <span className="badge">Bespoke Strategy & Storytelling</span>
          <h1 className="reveal-text">Elevate your business’ communication</h1>
          <p className="hero-subhead">Your business is your passion. Ours is helping you!</p>

          <div className="hero-intro-text">
            <p>
              Stories are the most powerful tool you have when you need to let the world know that you are here, and to make people remember you. Do you need help finding that story? Telling it? Showing it? We can help. We are professional storytellers in words and images.
            </p>
            <p>
              We specialise in helping small restaurants communicate with intention — through strategic storytelling, PR, and content that bridges where you are now with where you dream of going. Whether that dream is more locals at lunch, tourists tagging you in guides, or one day earning a Michelin nod, it all starts with how the world sees and remembers you.
            </p>
          </div>

          <div className="hero-action">
            <a href="#contact-service" className="cta-btn">Work With Us</a>
          </div>
        </div>
      </section>

      {/* Emotional Connection & Scope */}
      <section className="Services-statement">
        <div className="container">
          <div className="statement-card">
            <h2>Connect Beyond the Plate</h2>
            <p>
              As the market becomes more competitive, it’s not enough to serve delicious meals. The most successful brands are those that connect with people on an emotional level — through story, culture, and purpose. We help you create or grow your brand presence, achieving media awareness and consistent buzz.
            </p>
            <p className="market-scope">
              <strong>Available Worldwide</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="Services-capabilities">
        <div className="container">
          <h2 className="section-title">We can help you with:</h2>

          <div className="capabilities-grid">
            <div className="cap-item">
              <span className="cap-number">01</span>
              <h3>Visual Storytelling</h3>
              <p>Creating high-quality, professional photos and videos.</p>
            </div>

            <div className="cap-item">
              <span className="cap-number">02</span>
              <h3>Press & Editorial</h3>
              <p>Contacting the press / writing press releases.</p>
            </div>

            <div className="cap-item">
              <span className="cap-number">03</span>
              <h3>Culinary Copywriting</h3>
              <p>Copywriting for your website, social media, print, newsletter, etc.</p>
            </div>

            <div className="cap-item">
              <span className="cap-number">04</span>
              <h3>Instagram Upgrade</h3>
              <p>Upgrading and fine-tuning your Instagram account: This is your calling card, and your grid should be homogeneous and reflect your business. There’s a lot more potential for storytelling here — not just posting photos of the food. Remember, content is king!</p>
            </div>

            <div className="cap-item">
              <span className="cap-number">05</span>
              <h3>Website Cohesion</h3>
              <p>Tightening and updating your website in a more professional manner will also send a strong and cohesive message — just like everything else you do.</p>
            </div>

            <div className="cap-item">
              <span className="cap-number">06</span>
              <h3>Strategic PR</h3>
              <p>Cooperations with other businesses and ‘out-of-the-box’ PR strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="Services-about">
        <div className="container">
          <div className="about-wrapper">
            <span className="badge">Leadership & Background</span>
            <h2>About Karina</h2>

            <div className="about-text">
              <p>
                Karina has more than 15 years of experience in communication, PR, and journalism. In addition, she has been specialising in writing for and about the travel and food sectors for several years, and has numerous international restaurant visits under her belt. When you visit many of them — especially the best — you learn what works and what doesn’t.
              </p>
              <p>
                Her strength lies in storytelling through words and images, and the combination of the two. This allows her to help you tell your brand’s story, stand out from the crowd, and achieve the goals and dreams you have for your business.
              </p>
              <blockquote className="about-quote">
                “In my work, I believe it’s equally important not just to communicate, but also to listen. Everything I offer is personalised, collaborative, and aligned with the direction you want your brand to take,” she says.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Contact Form */}
      <section id="contact-service" className="Services-contact">
        <div className="container">
          <div className="form-container">
            <span className="badge">Inquire Now</span>
            <h2>Start Your Communication Strategy</h2>
            <p className="form-subtitle">Tell us about your restaurant, your goals, and where you want to take your brand.</p>

            <form className="contact-form">
              <input type="hidden" name="service" value="Strategic Communication" />

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="Full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="contact@restaurant.com" required />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="restaurant">Restaurant Name & City</label>
                  <input type="text" id="restaurant" name="restaurant" placeholder="e.g., Taberna do Bairro, Lisbon" required />
                </div>
                <div className="form-group">
                  <label htmlFor="channels">Website or Instagram Handle</label>
                  <input type="text" id="channels" name="channels" placeholder="@yourrestaurant" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell Us About Your Vision</label>
                <textarea id="message" name="message" rows={5} placeholder="What are your main communication challenges or upcoming milestones?" required></textarea>
              </div>

              <button type="submit" className="cta-btn submit-btn">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </article>
  );
}