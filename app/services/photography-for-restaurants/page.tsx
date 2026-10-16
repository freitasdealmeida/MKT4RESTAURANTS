export default function PhotographyForRestaurantsPage() {
  return (
    <article className="photography-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <span className="badge">Visual Storytelling</span>
          <h1 className="reveal-text">Photography for Restaurants</h1>
          <p className="hero-subhead">Imagery that makes people hungry!</p>

          <div className="hero-intro-text">
            <p>
              We capture the full dining experience—from the interior architecture, ambient lighting, and staff talent to the finest details of your culinary art. By highlighting the passion and craft behind your space, we elevate your restaurant’s perceived value, creating visual curiosity that seduces potential clients and compellingly drives new guests through your doors.
            </p>
            <p>
              From high-resolution assets for menus, billboards, and print materials to optimized digital imagery for your website, social media channels, Google Maps, and digital platforms, we supply a versatile library engineered to fill your marketing pipeline, create visual curiosity, and drive continuous reservations.
            </p>
          </div>

          <div className="hero-action">
            <a href="#contact-service" className="cta-btn">ELEVATE YOUR PERCEIVED VALUE</a>
          </div>
        </div>
      </section>

      {/* Emotional Connection & Scope */}
      <section className="Services-statement">
        <div className="container">
          <div className="statement-card">
            <h2>YOUR MENU DESERVES A MATCHING NARRATIVE.</h2>
            <p>
              You’ve invested heavily in creating a beautiful space, assembling and training an exceptional team, and perfecting every dish on your menu. But without imagery that matches that level of dedication, potential guests will never experience it. We capture the true craft, atmosphere, and culinary art of your establishment—elevating your perceived value and turning visual curiosity into booked tables.
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
          <h2 className="section-title">STRATEGIC PRODUCTION FOR 3 MONTHS</h2>

          <div className="capabilities-grid">
            <div className="cap-item">
              <span className="cap-number">01</span>
              <h3>RESEARCH & ANALYSIS</h3>
              <p>We analyze your current visual assets, study local market competitors, and assess visual trends to define your restaurant’s distinct aesthetic voice.</p>
            </div>

            <div className="cap-item">
              <span className="cap-number">02</span>
              <h3>MOODBOARD & SHOOT PLANNING</h3>
              <p>We craft a custom visual moodboard and detailed shot list tailored to your brand strategy, upcoming menu updates, and seasonal goals.</p>
            </div>

            <div className="cap-item">
              <span className="cap-number">03</span>
              <h3>ON-SITE PRODUCTION</h3>
              <p>We execute the planned shoot on-site, ensuring every image aligns with your brand’s visual identity and storytelling goals.</p>
            </div>

            <div className="cap-item">
              <span className="cap-number">04</span>
              <h3>3 MONTH CONTENT LIBRARY</h3>
              <p>You receive a fully edited, high-resolution content library structured to feed your social media, website, and promotional channels for a full 3 months cycle.</p>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="Services-about">
        <div className="container">
          <div className="about-wrapper">
            <span className="badge">Leadership & Background</span>
            <h2>About Eduardo</h2>

            <div className="about-text">
              <p>
                Eduardo has more than 15 years of experience in photography, technical lighting, and visual storytelling. Over the years, he has focused his expertise on the food, architecture, and hospitality sectors, capturing dozens of unique restaurant spaces and culinary concepts across Europe. Having shot in so many venues—from energetic local bistros to fine dining establishments—he knows exactly how to capture the atmosphere and detail that make a space magnetic.
              </p>
              <p>
                His strength lies in storytelling through words and images, and the combination of the two. This allows him to help you tell your brand’s story, stand out from the crowd, and achieve the goals and dreams you have for your business.
              </p>
              <blockquote className="about-quote">
                “Great photography doesn't just display food—it respects your restaurant's identity and translates the entire dining experience into imagery that stops scrollers, sparks desire, and fills your tables,” he says.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Contact Form */}
      <section id="contact-service" className="services-contact">
        <div className="container">
          <div className="form-container">
            <span className="badge">Inquire Now</span>
            <h2>READY TO TRANSFORM YOUR RESTAURANT'S VISUAL PRESENCE?</h2>
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