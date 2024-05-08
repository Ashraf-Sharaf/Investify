function LeftBusinesCard(){
   return <div className="investor-business-card flex gap-20 ">
    <div className="investor-business-img">
      <img src="/images/Investify.png" alt="No image" />
    </div>
    <div className="investor-business-description padding-10 flex column gap-20">
      <h1>Business Name</h1>
      <h4>Industry</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Explicabo cumque veritatis repellat? Asperiores, enim quisquam eum
        saepe quod fugit impedit nulla expedita ipsa, odit reprehenderit
        aut, maiores iure voluptate in?
      </p>
      <div className="flex gap-10 center">
        <button className="investor-business-button">View more</button>
      </div>
    </div>
  </div>

}
export default LeftBusinesCard;
