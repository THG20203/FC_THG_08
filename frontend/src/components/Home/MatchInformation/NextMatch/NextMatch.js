import "./NextMatch.scss";
import blueBadge from "../../../../assets/images/identity/football-badge.png";
import eagleBadge from "../../../../assets/images/matchBadges/eagle-badge.png";

const NextMatch = () => {
  return (
    <div className="next-match__container">
      <h5 className="heading-5 fixture__title">Next Match: Saturday 3pm</h5>
      <div className="fixture__content">
        <img
          className="next-match__badge--blue"
          src={blueBadge}
          alt="FC THG 08 Badge"
        />
        <h1 className="heading-1 fixture__score">- : -</h1>
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
