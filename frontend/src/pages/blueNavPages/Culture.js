import React, { useState } from "react";
import "./Culture.scss";
import CultureContent from "../../components/CultureContent/CultureContent";
import CultureFormSection from "../../components/CultureForm/CulturalEntry/CultureFormSection";
import CulturalStory from "../../components/CultureForm/CulturalOutput/CulturalStory";

const DUMMY_STORIES = [
  {
    id: "s1",
    storyTitle: "Miracle Comeback",
    fanStory:
      "Down 3-0, the team rallied in the final minutes. Fans witnessed a jaw-dropping turnaround, erupting in euphoria. Unforgettable victory.",
    name: "Tristan",
  },
  {
    id: "s2",
    storyTitle: "Stadium Roar",
    fanStory:
      "The stadium quaked as a last-minute goal secured the championship. Deafening cheers resonated, echoing the team's triumph.",
    name: "Harry",
  },
  {
    id: "s3",
    storyTitle: "Historic Triumph",
    fanStory:
      "FC THG 08 claimed the league title after decades. The city painted in team colors, streets celebrating a long-awaited victory parade.",
    name: "Becky",
  },
];

const CulturePage = () => {
  /* using desctructuring to get access to stories and the setStories updating state function */
  const [stories, setStories] = useState(DUMMY_STORIES);

  const addStoryHandler = (story) => {
    /* If I update my state based on the previous state (or the previous snapshot of this state), 
    should use special function form for this state updating function. */
    /* Pass a function as an argument to this state updating function. That function will automatically 
    receive the latest state snapshot. */
    setStories((prevStories) => {
      /* we add story, which we're getting as a parameter at the start of this addStoryHandler function */
      return [story, ...prevStories];
    });
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
