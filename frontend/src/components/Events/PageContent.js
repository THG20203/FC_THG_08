import "./PageContent.scss";

const PageContent = () => {
  return (
    <div className="page-content">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PageContent;
