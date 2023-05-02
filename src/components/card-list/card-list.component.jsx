import Card from "../card/card.component";
import "./card-list.component.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id}/>;
    })}
  </div>
);

export default CardList;
