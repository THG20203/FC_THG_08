export const ProgressBar = () => {
  const containerStyles = {
    height: 25,
    backgroundColor: "var(--color-grey-2)",
    borderRadius: 50,
    margin: 50,
    width: "100%",
  };
  const fillerStyles = {};
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
