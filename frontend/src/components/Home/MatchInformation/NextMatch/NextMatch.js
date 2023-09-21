import "./NextMatch.scss";
import whiteBadge from "../../../../assets/images/identity/football-badge-white.png";
import eagleBadge from "../../../../assets/images/matchBadges/eagle-badge.png";

const NextMatch = () => {
  return (
    <div className="next-match__container">
      <h4 className="heading-4--light fixture__title">
        Next Match: Saturday 3pm
      </h4>
      <div className="fixture__content">
        <div className="fixture__club">
          <img
            className="next-match__badge--blue"
            src={whiteBadge}
            alt="FC THG 08 Badge"
          />
          <p className="fixture__club--name paragraph-text">FC THG 08</p>
        </div>
        <h1 className="heading-1 fixture__score next-match__score">- : -</h1>
        <img
          className="next-match__badge--eagle"
          src={eagleBadge}
          alt="ECFC Badge"
        />
      </div>
    </div>
  );
};

export default NextMatch;
