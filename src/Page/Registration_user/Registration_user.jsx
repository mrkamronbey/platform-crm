import Forms from "../../Components/Forms/Forms";
import "./Registration_user.css";

function Registration_user({ menuCollapse }) {
  return (
    <>
      <div
        className="c-regis-user"
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
          })
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
          <Forms menuCollapse/>
        </div>
      </div>
    </>
  );
}
export default Registration_user;
