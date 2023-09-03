import "./LastMatch.scss";
import blueBadge from "../../../../assets/images/identity/football-badge.png";
import redBadge from "../../../../assets/images/matchBadges/football-badge-red.png";

const LastMatch = () => {
  return (
    <div className="last-match__container">
      <p>Last Match</p>
      <img src={blueBadge} alt="FC THG 08 Badge" />
      <img src={redBadge} alt="Crimson Pangmere Badge" />
    </div>
  );
};

export default LastMatch;
