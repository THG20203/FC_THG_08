import "./LastMatch.scss";
import blueBadge from "../../../../assets/images/identity/football-badge.png";
import redBadge from "../../../../assets/images/matchBadges/football-badge-red.png";

const LastMatch = () => {
  return (
    <div className="last-match__container">
      <h4 className="heading-4 fixture__title">Last Match: Wednesday 8pm</h4>
      <div className="fixture__content">
        <img
          className="last-match__badge--blue"
          src={blueBadge}
          alt="FC THG 08 Badge"
        />
        <h1 className="heading-1 fixture__score">3 : 0</h1>
        <img
          className="last-match__badge--crimson"
          src={redBadge}
          alt="Crimson Pangmere Badge"
        />
      </div>
    </div>
  );
};

export default LastMatch;
