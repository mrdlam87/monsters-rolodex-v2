import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../../store/monsters.slice";
import { selectFavouriteMonsterIds } from "../../store/monsters.selector";
import FaveButton from "../fave-button/fave-button.component";
import "./card.styles.css";

const Card = ({ monster }) => {
  const dispatch = useDispatch();
  const favouriteMonsterIds = useSelector(selectFavouriteMonsterIds);
  const { id, name, email } = monster;
  const isFave = favouriteMonsterIds.includes(id);

  const clickHandler = () => dispatch(toggleFavourite(monster));

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
