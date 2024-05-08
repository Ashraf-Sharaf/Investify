function RightCard(){
    return         <div className="investor-business-card-right flex gap-20 -right ">
    <div className="investor-business-description-right padding-10 flex column gap-20">
      <h1>Business Name</h1>
      <h4>Industry</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Explicabo cumque veritatis repellat? Asperiores, enim quisquam eum
        saepe quod fugit impedit nulla expedita ipsa, odit reprehenderit
        aut, maiores iure voluptate in?
      </p>
      <div className="flex gap-10 center">
        <button className="investor-business-button-right">View more</button>
      </div>
    </div>
    <div className="investor-business-img-right">
      <img src="/images/Investify.png" alt="No image" />
    </div>
  </div>
}
export default RightCard;