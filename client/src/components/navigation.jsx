export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Menu</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">
            <img
              src="../images/logo.jpg"
              className="logo"
              alt="Bulk Ninjas Logo"
            />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="/login" className="page-scroll">
                Log In
              </a>
            </li>
            <li>
              <a href="/register" className="page-scroll">
                Register
              </a>
            </li>
            <li>
              <a href="/viewCart" className="page-scroll">
                View Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
