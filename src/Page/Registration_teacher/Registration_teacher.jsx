import TeacherForm from "../../Components/Forms/TeacherForm";
import "./Registration_teacher.css";
function Registration_teacher({ menuCollapse }) {
  return (
    <>
      <div className="c-regis-teacher"  style={{
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
          <TeacherForm menuCollapse/>
        </div>
       
      </div>
    </>
  );
}
export default Registration_teacher;
