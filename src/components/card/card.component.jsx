import { useContext } from "react";
import { MonstersContext } from "../../contexts/monsters.context";
import FaveButton from "../fave-button/fave-button.component";
import "./card.styles.css";

const Card = ({ monster }) => {
  const { toggleFavouriteMonster } = useContext(MonstersContext);
  const { id, name, email, isFave } = monster;

  const clickHandler = () => {
    toggleFavouriteMonster(monster);
  };

  return (
    <div className="card-container">
      <FaveButton isFave={isFave} onClick={clickHandler} />
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
