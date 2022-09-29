import { useDispatch, useSelector } from "react-redux";
import { toggleFavouriteMonster } from "../../store/monsters.slice";
import { selectMonsters } from "../../store/monsters.selector";
import FaveButton from "../fave-button/fave-button.component";
import "./card.styles.css";

const Card = ({ monster }) => {
  const dispatch = useDispatch();
  const monsters = useSelector(selectMonsters);
  const { id, name, email, isFave } = monster;

  const clickHandler = () => {
    dispatch(toggleFavouriteMonster(monster, monsters));
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
