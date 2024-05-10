import {useNavigate} from "react-router-dom";

function RightCard({ business }) {
  const navigate = useNavigate();

  const { name, industry, description } = business;
  return (
    <div className="investor-business-card-right flex gap-20 -right ">
      <div className="investor-business-description-right padding-10 flex column gap-20">
        <h1>{name}</h1>
        <h4>{industry}</h4>
        <p>{description}</p>

          <button className="investor-business-button-right" onClick={()=>{navigate('/investor/single-business')}}>View more</button>
        
      </div>
      <div className="investor-business-img-right">
        <img src="/images/Investify.png" alt="No image" />
      </div>
    </div>
  );
}
export default RightCard;
