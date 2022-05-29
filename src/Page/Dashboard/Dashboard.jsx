import Charts from "../../Components/Charts/Charts";
import "./Dashboard.css";
function Dashboard({ menuCollapse }) {
  return (
    <>
      <div className="c-dashboard" style={{
          ...(!menuCollapse && {
            width: "80%",
            marginLeft: "270px",
            transition: "0.3s",
          }),
          ...(menuCollapse && {
            width: " 90%",
            marginLeft: "100px",
            transition: "0.3s",
          })
        }}>
        <div className="container" >
          <h1>Dashboard</h1>
          <Charts/>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
