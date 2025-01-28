import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="alert alert-primary">
          <h1 className="text-center text-danger">404 </h1>
          <h2>Page Not Found</h2>
          <br></br>
          <Link className="btn btn-primary w-100" to="/">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
