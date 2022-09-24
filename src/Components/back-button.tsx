import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./back-button.css";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="back-home-button">
      <FaArrowLeft />
    </button>
  );
};

export default BackButton;
