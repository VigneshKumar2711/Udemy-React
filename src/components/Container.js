import sale1 from "../assets/images/Sales-Image 1.jpg"
import sale2 from "../assets/images/Sales-Image 2.jpg"
import sale3 from "../assets/images/Sales-Image 3.jpg"
import sale4 from "../assets/images/Sales-Images 4.jpg"
function Container(){
  return(
    <div className="recommended__container">
    <div className="course-card">
      <img src={sale1} alt="Sales-Images1"></img>
      <h3>2023 Python Data Visualisation MasterClass</h3>
      <p>Col Steele</p>
      <p>4.2 ⭐⭐⭐⭐</p>
      <p>449 <del>1999</del></p>
    </div>
    <div className="course-card">
      <img src={sale2} alt="Sales-Images2"></img>
      <h3>The Web Development Bootcamp 2024</h3>
      <p>Col Steele</p>
      <p>4.9 ⭐⭐⭐⭐⭐</p>
      <p>449 <del>1999</del></p>
    </div>
    <div className="course-card">
      <img src={sale3} alt="Sales-Images3"></img>
      <h3>How the Internet Works & the Web Development Process</h3>
      <p>Col Steele</p>
      <p>3.9 ⭐⭐⭐⭐</p>
      <p>449 <del>1999</del></p>
    </div>
    <div class="course-card">
      <img src={sale4} alt="Sales-Images4"></img>
      <h3>The Complete 2024 Fullstack Web Developer Course</h3>
      <p>Col Steele</p>
      <p>4.5 ⭐⭐⭐⭐</p>
      <p>449 <del>1999</del></p>
    </div>
  </div>
  )
}
export default Container