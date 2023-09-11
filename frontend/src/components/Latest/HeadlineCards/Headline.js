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
                  <span className="headline-cards__span headline-cards__span-1">
                    Team Spirit Everything
                  </span>
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
                  <span className="headline-cards__span headline-cards__span-2">
                    Fabio Lombardy Loan
                  </span>
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
                  <span className="headline-cards__span headline-cards__span-3">
                    Big Pressure Moments
                  </span>
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
