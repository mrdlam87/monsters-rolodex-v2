import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import "./fave-button.styles.css";

const FaveButton = ({ isFave, ...otherProps }) => {
  return isFave ? (
    <AiFillStar className="star" {...otherProps} />
  ) : (
    <AiOutlineStar className="star" {...otherProps} />
  );
};

export default FaveButton;
