import saleImage from "../assets/images/Sale image.jpg"
function SaleImage() {
  return (
    <div>
      <div className="sale-image">
        <img src={saleImage} alt="Sale"></img>
      </div>
      <div className="banner_content">
        <h2>Learning that gets you</h2><br />
        <p>Skills for your present (and for your future). Get started with us.</p>
      </div>
    </div>

  )
}
export default SaleImage