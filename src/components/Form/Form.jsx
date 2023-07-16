import "./Form.css";
import { useState } from "react";
import Formstep1 from "./Formstep/Formstep1";
import Formstep2 from "./Formstep/Formstep2";
import Formstep3 from "./Formstep/Formstep3";
import Formstep4 from "./Formstep/Formstep4";

function Form() {
  const [page, setPage] = useState(0);

  function renderPage() {
    // if (page === 0) {
    //   return <Formstep1 page={page} setPage={setPage} />;
    // } else if (page === 1) {
    //   return <Formstep2 page={page} setPage={setPage} />;
    // } else if (page === 2) {
    //   return <Formstep3 page={page} setPage={setPage} />;
    // } else {
    //   return <Formstep4 page={page} setPage={setPage} />;
    // }
    switch (page) {
      case 0:
        return <Formstep1 page={page} setPage={setPage} />;
      case 1:
        return <Formstep2 page={page} setPage={setPage} />;
      case 2:
        return <Formstep3 page={page} setPage={setPage} />;
      case 3:
        return <Formstep4 page={page} setPage={setPage} />;
      default:
        return <Formstep1 page={page} setPage={setPage} />;
    }
  }

  return (
    <div>
      <form action="#" class="form">
        <h1 className="text-center">Register</h1>
        <div className="progress-bar">
          <div
            className="currentProgress"
            style={{ width: `${(page / 3) * 100}%` }}
          ></div>
          <div
            className="progress-step progress-step-active"
            data-title="Intro"
          ></div>
          <div
            className={
              page >= 1 ? "progress-step-active progress-step" : "progress-step"
            }
            data-title="Contact"
          ></div>
          <div
            className={
              page >= 2 ? "progress-step-active progress-step" : "progress-step"
            }
            data-title="Id"
          ></div>
          <div
            className={
              page >= 3 ? "progress-step-active progress-step" : "progress-step"
            }
            data-title="Password"
          ></div>
        </div>
        {renderPage()}
      </form>
    </div>
  );
}

export default Form;
