import WorkerForm from "../../Components/Forms/WorkerForm";
import "./Registration_worker.css";

function Registration_worker({ menuCollapse }) {
  return (
    <>
      <div
        className="c-regis-worker"
        style={{
          ...(!menuCollapse && {
            width: "80%",
            marginLeft: "270px",
            transition: "0.3s",
          }),
          ...(menuCollapse && {
            width: " 90%",
            marginLeft: "100px",
            transition: "0.3s",
          }),
        }}
      >
        <div className="container">
          <h1
            className="c-courses-title"
            style={{
              ...(!menuCollapse && {
                width: "80%",
                marginLeft: "70px",
                transition: "0.3s",
              }),
              ...(menuCollapse && {
                width: " 90%",
                marginLeft: "130px",
                transition: "0.3s",
              }),
            }}
          >
            Registration
          </h1>
          <WorkerForm menuCollapse />
        </div>
      </div>
    </>
  );
}
export default Registration_worker;
