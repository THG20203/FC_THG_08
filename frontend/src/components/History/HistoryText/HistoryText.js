import "./HistoryText.scss";

const HistoryText = () => {
  return (
    <div className="history-text__container">
      <div className="history-text__content">
        <h1 className="heading-1--light mb-md">
          <em>Traditions of FC THG 08:</em> Forging a Legacy on the Pitch
        </h1>
        <div className="history-text__two-column">
          <h4 className="heading-4--light history-text__description history-text__dates">
            <span>1893 - 1919</span>
          </h4>
          <p className="paragraph-text history-text__description">
            The club's early years were marked by gritty determination. From
            local leagues to regional tournaments, FC THG 08 gained a reputation
            for its tenacity and skill.
          </p>
        </div>
        <div className="history-text__two-column">
          <h4 className="heading-4--light history-text__description history-text__dates">
            <span>1920 - 1957</span>
          </h4>
          <p className="paragraph-text history-text__description">
            FC THG 08 secured 10 league titles from 1920 to 1957. Their
            consistency over nearly four decades gained national attention.
          </p>
        </div>
        <div className="history-text__two-column">
          <h4 className="heading-4--light history-text__description history-text__dates">
            <span>1958 - 1976</span>
          </h4>
          <p className="paragraph-text history-text__description">
            The club played in Europe for the first time in the late 50's and
            early 60's, challenging the continents best for international
            honours.
          </p>
        </div>
        <div className="history-text__two-column">
          <h4 className="heading-4--light history-text__description history-text__dates">
            <span>1977 - 1995</span>
          </h4>
          <p className="paragraph-text history-text__description">
            Financial problems gripped the club in late 70's and 80's, but
            several cup triumphs were highlights.
          </p>
        </div>
        <div className="history-text__two-column">
          <h4 className="heading-4--light history-text__description history-text__dates">
            <span>1995 - present</span>
          </h4>
          <p className="paragraph-text history-text__description">
            Since 1982, FC THG 08 has established itself on the world stage,
            with national and international success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryText;
