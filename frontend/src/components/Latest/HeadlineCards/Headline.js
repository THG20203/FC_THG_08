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
                    Big Pressure Moments
                  </span>
                </h4>
                <div className="headline-cards__card--details">
                  <ul className="headline-cards__list">
                    <li className="headline-cards__list--item">
                      Manager looks to big tests
                    </li>
                    <li className="headline-cards__list--item">
                      Players preparing for challenges
                    </li>
                  </ul>
                </div>
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
                    Fixture List Updated
                  </span>
                </h4>
                <div className="headline-cards__card--details">
                  <ul className="headline-cards__list">
                    <li className="headline-cards__list--item">
                      League & Cup fixtures re-arranged
                    </li>
                    <li className="headline-cards__list--item">
                      4 of our clubs games affected
                    </li>
                  </ul>
                </div>
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
                    Fabio Lombardy Deal
                  </span>
                </h4>
                <div className="headline-cards__card--details">
                  <ul className="headline-cards__list">
                    <li className="headline-cards__list--item">
                      2 year permanent contract
                    </li>
                    <li className="headline-cards__list--item">
                      Center midfiled depth improved
                    </li>
                  </ul>
                </div>
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
