export const ProgressBar = ({ bgColor, completed }) => {
  const containerStyles = {
    height: 30,
    backgroundColor: "var(--color-grey-2)",
    borderRadius: 50,
    border: "0.2rem solid var(--color-grey-1)",
    marginTop: 25,
    marginBottom: 25,
    width: "100%",
    textAlign: "center",
  };
  const fillerStyles = {
    backgroundColor: bgColor,
    height: "100%",
    /* this value will be affected by the input value hence backticks */
    width: `${completed}`,
    /* border radius inherited from parent element, containerStyles */
    borderRadius: "inherit",
    transition: "width 1s ease-in-out",
    textAlign: "right",
  };
  const labelStyles = {
    padding: 15,
    margin: 10,
  };
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span className="paragraph-text" style={labelStyles}>
          {/* template literal */}
          {`${completed}%`}
        </span>
      </div>
    </div>
  );
};
