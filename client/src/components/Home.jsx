export const Home = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  Bulk Ninjas
                  <span></span>
                </h1>
                <p>
                  Mutating discounts with accelerated buying. Start using Bulk
                  Ninjas to buy your favourite products in groups and get big
                  disounts.
                </p>
                <a
                  href="/register"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Register Now
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
