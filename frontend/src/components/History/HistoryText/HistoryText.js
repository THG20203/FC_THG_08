import "./HistoryText.scss";

const HistoryText = () => {
  return (
    <div className="history-text__container">
      <div className="history-text__carousel">
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
            <span>1920 - 1977</span>
          </h4>
          <p className="paragraph-text history-text__description">
            FC THG 08 secured 10 league titles from 1920 to 1977. Their
            consistency over nearly six decades gained national attention.
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
