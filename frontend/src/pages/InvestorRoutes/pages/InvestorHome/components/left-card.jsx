import { useNavigate } from "react-router-dom";
import SingleBuisness from "../../SingleBusiness/SingleBusiness";
function LeftBusinesCard({ business }) {
  const navigate = useNavigate();

  const { id, name, industry, description } = business;
  const handleViewMore = () => {
    navigate(`/investor/single-business/${id}`);
  };
  return (
    <div className="investor-business-card flex gap-20 ">
      <div className="investor-business-img">
        <img src="/images/Investify.png" alt="No image" />
      </div>
      <div className="investor-business-description padding-10 flex column gap-20">
        <h1>{name}</h1>
        <h4>{industry}</h4>
        <p>{description}</p>

        <div className="investor-business-button flex center">
          <button
            onClick={() => {
              handleViewMore();
            }}
          >
            View more
          </button>
        </div>
      </div>
    </div>
  );
}
export default LeftBusinesCard;
