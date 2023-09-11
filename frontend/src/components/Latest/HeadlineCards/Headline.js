import { Fragment, React } from "react";
import "./Headline.scss";

const Headline = () => {
  return (
    <Fragment>
      <section className="headline-cards__section">
        <div className="headline-cards__row">
          <div className="headline-cards__col  headline-cards__col--1">
            <div className="headline-cards__card">
              <div className="headline-cards__card-side headline-cards__card-side--front">
                <div className="headline-cards__card--picture headline-cards__card--picture--1">
                  &nbsp;
                </div>
                <h4 className="headline-cards__card--heading heading-4--light">
                  Team spirit everything
                </h4>
                <div className="headline-cards__card--details">Details</div>
              </div>
              <div className="headline-cards__card-side headline-cards__card-side--back">
                back
              </div>
            </div>
          </div>
          <div className="headline-cards__col headline-cards__col--2">
            <div className="headline-cards__card">
              <div className="headline-cards__card-side headline-cards__card-side--front">
                <div className="headline-cards__card--picture headline-cards__card--picture--2">
                  &nbsp;
                </div>
                <h4 className="headline-cards__card--heading heading-4--light">
                  Fabio Lombardy Loan
                </h4>
                <div className="headline-cards__card--details">Details</div>
              </div>
              <div className="headline-cards__card-side headline-cards__card-side--back">
                back
              </div>
            </div>
          </div>
          <div className="headline-cards__col  headline-cards__col--3">
            <div className="headline-cards__card">
              <div className="headline-cards__card-side headline-cards__card-side--front">
                <div className="headline-cards__card--picture headline-cards__card--picture--3">
                  &nbsp;
                </div>
                <h4 className="headline-cards__card--heading heading-4--light">
                  Big Pressure Moments
                </h4>
                <div className="headline-cards__card--details">Details</div>
              </div>
              <div className="headline-cards__card-side headline-cards__card-side--back">
                back
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Headline;
