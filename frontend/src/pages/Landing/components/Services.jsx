function Services() {
  return (
    <div className="service-section flex center column ">
      <h1>What you will get at Investify</h1>
      <div className="service-cards flex around center">
        <div className="service-card flex column center">
          <div className="service-card-img flex center ">
            <img
              className="service-card-img-logo"
              src="/images/AI-avatar.jpeg"
              alt="logo"
            ></img>
          </div>
          <div className="service-card-text flex center">
            <p>
              Empower your investments with cutting-edge AI assistance on our
              platform.
            </p>
          </div>
        </div>

        <div className="service-card flex column center">
          <div className="service-card-img flex  center">
            <img
              className="service-card-img-logo"
              src="/images/meeting.jpeg"
              alt="logo"
            ></img>
          </div>
          <div className="service-card-text flex center">
            <p>
              Experience live meetings on our website offering customized
              support and guidance.
            </p>
          </div>
        </div>

        <div className="service-card flex column center">
          <div className="service-card-img flex center">
            <img
              className="service-card-img-logo"
              src="/images/friendly-design.png"
              alt="logo"
            ></img>
          </div>
          <div className="service-card-text flex center">
            <p>
              Experience seamless navigation through our user-friendly website
              design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
