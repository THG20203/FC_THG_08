import "./NextMatch.scss";
import blueBadge from "../../../../assets/images/identity/football-badge.png";
import eagleBadge from "../../../../assets/images/matchBadges/eagle-badge.png";

const NextMatch = () => {
  return (
    <div className="next-match__container">
      <p>Next Match</p>
      <img
        className="next-match__badge--blue"
        src={blueBadge}
        alt="FC THG 08 Badge"
      />
      <img
        className="next-match__badge--eagle"
        src={eagleBadge}
        alt="ECFC Badge"
      />
    </div>
  );
};

export default NextMatch;
