import "./LastMatch.scss";
import blueBadge from "../../../../assets/images/identity/football-badge.png";
import redBadge from "../../../../assets/images/matchBadges/football-badge-red.png";

const LastMatch = () => {
  return (
    <div className="last-match__container">
      <p>Last Match</p>
      <img
        className="last-match__badge--blue"
        src={blueBadge}
        alt="FC THG 08 Badge"
      />
      <img
        className="last-match__badge--crimson"
        src={redBadge}
        alt="Crimson Pangmere Badge"
      />
    </div>
  );
};

export default LastMatch;
