import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="back-home-button">
      <FaArrowLeft style={{ fontSize: "large", color: "#073b4c" }} />
    </button>
  );
};

export default BackButton;
