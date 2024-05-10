import {useNavigate} from "react-router-dom";

function LeftBusinesCard({ business }) {
  const navigate = useNavigate();

  const { name, industry, description } = business;

  return (
    <div className="investor-business-card flex gap-20 ">
      <div className="investor-business-img">
        <img src="/images/Investify.png" alt="No image" />
      </div>
      <div className="investor-business-description padding-10 flex column gap-20">
        <h1>{name}</h1>
        <h4>{industry}</h4>
        <p>{description}</p>
        <div className="flex gap-10 center">
          <button className="investor-business-button" onClick={()=>{navigate('/investor/single-business')}}>View more</button>
          </div>
      </div>
    </div>
  );
}
export default LeftBusinesCard;
