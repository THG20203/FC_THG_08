import { useRouteError } from "react-router-dom";
import BlueNavbar from "../components/Navigation/BlueNavbar";
import WhiteNavbar from "../components/Navigation/WhiteNavbar";

import PageContent from "../components/Events/PageContent";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <BlueNavbar />
      <WhiteNavbar />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
