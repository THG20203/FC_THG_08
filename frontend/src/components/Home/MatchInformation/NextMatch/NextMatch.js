import "./NextMatch.scss";
import blueBadge from "../../../../assets/images/identity/football-badge.png";
import eagleBadge from "../../../../assets/images/matchBadges/eagle-badge.png";

const NextMatch = () => {
  return (
    <div className="next-match__container">
      <p>Last Match</p>
      <img src={blueBadge} alt="FC THG 08 Badge" />
      <img src={eagleBadge} alt="ECFC Badge" />
    </div>
  );
};

export default NextMatch;
