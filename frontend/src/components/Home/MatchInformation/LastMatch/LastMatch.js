import "./LastMatch.scss";
import whiteBadge from "../../../../assets/images/identity/football-badge-white.png";
import redBadge from "../../../../assets/images/matchBadges/football-badge-red.png";

const LastMatch = () => {
  return (
    <div className="last-match__container">
      <h4 className="heading-4--light fixture__title">
        Last Match: Wednesday 8pm
      </h4>
      <div className="fixture__content">
        <div className="fixture__club">
          <img
            className="last-match__badge--blue"
            src={whiteBadge}
            alt="FC THG 08 Badge"
          />
          <p className="fixture__club--name paragraph-text">FC THG 08</p>
        </div>
        <h1 className="heading-1 fixture__score">3 : 0</h1>
        <div className="fixture__club">
          <img
            className="last-match__badge--crimson"
            src={redBadge}
            alt="Crimson Pangmere Badge"
          />
          <p className="fixture__club--name paragraph-text">C. Pangmere</p>
        </div>
      </div>
    </div>
  );
};

export default LastMatch;
