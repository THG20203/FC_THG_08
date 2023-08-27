export const ProgressBar = () => {
  const containerStyles = {};
  const fillerStyles = {};
  const labelStyles = {};
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span className="heading-4--dark" style={labelStyles}>
          {"Completed"}
        </span>
      </div>
    </div>
  );
};
