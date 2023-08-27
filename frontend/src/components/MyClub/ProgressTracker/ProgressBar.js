export const ProgressBar = () => {
  const containerStyles = {
    height: 25,
    backgroundColor: "var(--color-grey-2)",
    borderRadius: 50,
    margin: 50,
    width: "100%",
  };
  const fillerStyles = {
    backgroundColor: bgColor,
    height: "100%",
    /* this value will be affected by the input value hence backticks */
    width: `${completed}`,
    /* border radius inherited from parent element, containerStyles */
    borderRadius: "inherit",
  };
  const labelStyles = {};
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span className="paragraph-text" style={labelStyles}>
          {"Completed"}
        </span>
      </div>
    </div>
  );
};
