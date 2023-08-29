import "./HistoryText.scss";

const HistoryText = () => {
  return (
    <div className="history-text__container">
      <div className="history-text__content">
        <h1 className="heading-1--light mb-lg">
          <em>Traditions of FC THG 08:</em> Forging a Legacy on the Pitch
        </h1>
        <div className="history-text__two-column">
          <h4 className="heading-4--light history-text__description history-text__dates">
            1893 - 1920
          </h4>
          <p className="paragraph-text history-text__description">
            The club's early years were marked by gritty determination as
            players battled it out on the rugged pitches of their time. From
            local leagues to regional tournaments, FC THG 08 quickly gained a
            reputation for its tenacity and skill, earning respect from
            opponents and fans alike.
          </p>
        </div>
        <div className="history-text__two-column">
          <h4 className="heading-4--light history-text__description history-text__dates">
            1920 - 1977
          </h4>
          <p className="paragraph-text history-text__description">
            FC THG 08 secured an impressive 10 league titles from 1920 to 1977.
            Their consistent success over nearly six decades gained national
            attention.
          </p>
        </div>
        <div className="history-text__two-column">
          <h4 className="heading-4--light history-text__description history-text__dates">
            1977 - 1995
          </h4>
          <p className="paragraph-text history-text__description">
            Financial problems gripped the club in late 70's and 80's, but
            several cup triumphs were highlights. This showcased the team's
            resilience and ability to overcome challenges both on and off the
            pitch.
          </p>
        </div>
        <div className="history-text__two-column">
          <h4 className="heading-4--light history-text__description history-text__dates">
            1995 - present
          </h4>
          <p className="paragraph-text history-text__description">
            Since 1982, FC THG 08 has enjoyed a meteoric rise, clinching an
            impressive streak of 8 consecutive league titles, solidifying their
            status as a global powerhouse. This remarkable run of success has
            firmly established FC THG 08 as a beacon of excellence on the
            international football stage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryText;
