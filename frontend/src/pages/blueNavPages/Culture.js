import React, { useState } from "react";
import "./Culture.scss";
import CultureContent from "../../components/CultureContent/CultureContent";
import CultureFormSection from "../../components/CultureForm/CulturalEntry/CultureFormSection";
import CulturalStory from "../../components/CultureForm/CulturalOutput/CulturalStory";

const DUMMY_STORIES = [
  {
    id: "s1",
    title: "Miracle Comeback",
    story:
      "Down 3-0, the team rallied in the final minutes. Fans witnessed a jaw-dropping turnaround, erupting in euphoria. Unforgettable victory.",
    name: "Tristan",
  },
  {
    id: "s2",
    title: "Stadium Roar",
    story:
      "The stadium quaked as a last-minute goal secured the championship. Deafening cheers resonated, echoing the team's triumph.",
    name: "Harry",
  },
  {
    id: "s3",
    title: "Historic Triumph",
    story:
      "FC THG 08 claimed the league title after decades. The city painted in team colors, streets celebrating a long-awaited victory parade.",
    name: "Becky",
  },
];

const CulturePage = () => {
  /* using desctructuring to get access to stories and the setStories updating state function */
  const [stories, setStories] = useState(DUMMY_STORIES);

  const addStoryHandler = (story) => {
    /* Can now call setStories, set our stories array to a new array, which includes a new story */
    /* So to setStories, pass a new array, add a new expense as the first item in the array. */
    /* use story as first item in the array, then use ... (the spread operator) for stories to 
    add to the rest of the existing stories. This is by pulling out all of the existing array elements,
    and populating the rest of this new array with those existing elements. */
    setStories([story, ...stories]);
  };

  return (
    <div className="culture-container">
      <CultureContent />
      {/* Fan Story Submission Form: Allows fans to share their personal stories related to the club, 
      such as memorable match experiences, encounters with players, or how the club has impacted 
      their lives. */}
      <div className="culture-form__container">
        <CultureFormSection onAddStory={addStoryHandler} />
        <CulturalStory contributions={stories} />
      </div>
    </div>
  );
};

export default CulturePage;
