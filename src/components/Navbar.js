function Navbar() {
    return (
      <div className="navbar">
        <div className="navbar__sec1">
          <h1 className="navbar__sec1__title">Udemy</h1>
        </div>
        <div className="navbar__sec2">
          <i className="fa-solid fa-magnifying-glass" style={{ color: "black" }}></i>
          <input placeholder="Search for anything here.Tech,Business,Art..."></input>
        </div>
        <div className="navbar__sec3">
          <p>Courses</p>
          <div className="mylearning">
            <p>My Learning</p>
            <div className="mylearning_popup">
              <p>You didn't Purchase anything yet.</p>
            </div>
          </div>
          <i className="fa-solid fa-cart-shopping" style={{ color: "black" }}></i>
          <i className="fa-solid fa-bell" style={{ color: "black" }}></i>
          <i className="fa-solid fa-user" style={{ color: "black" }}></i>
        </div>
      </div>
    )
  }
  export default Navbar