import "./Courses.css";
function Courses({ menuCollapse }) {
  return (
    <>
      <div className="courses"  style={{
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
          <h1>Courses</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et necessitatibus voluptatem distinctio possimus dolor cumque voluptatibus rem nihil ea harum? Impedit blanditiis ut ducimus sunt quas. Saepe, aspernatur! In aut quisquam dignissimos optio, eligendi recusandae? Dolor quo ipsam, quas ipsum doloribus minima quae distinctio eum, ab officiis assumenda voluptatibus reprehenderit quos est adipisci quibusdam tempore eos consectetur porro modi qui quasi quod nostrum. Veritatis eaque itaque ut consequuntur aspernatur quo nobis laboriosam autem impedit error eveniet totam animi dolores vitae debitis accusantium, recusandae est provident quis doloribus dignissimos nam obcaecati. Porro fugiat quos repudiandae sunt tempora eaque aliquam molestias omnis officia obcaecati? Perspiciatis nulla vel nihil, quod autem officia earum expedita? Temporibus doloribus reiciendis fugit. Laboriosam, distinctio temporibus veritatis soluta id iure, voluptate accusantium rerum quos amet rem debitis expedita doloremque unde ea! Error quibusdam debitis ducimus nobis rem impedit. Unde, saepe iusto minus, labore dolor debitis similique quasi vero maxime molestiae expedita commodi in sint repudiandae id earum magni? Veniam veritatis aliquid numquam aspernatur explicabo, asperiores ex natus alias voluptatibus ad at ut eum et in iste distinctio reiciendis autem exercitationem officiis fugit laudantium dolorum quaerat dolor nesciunt! Labore, ab beatae! Corporis, eaque laboriosam unde quos modi odit quis aut, nisi doloribus accusantium eum illo doloremque explicabo consequuntur, non ipsam! Optio maiores repudiandae repellendus voluptate totam autem facilis, nemo dolores incidunt nulla voluptatibus beatae vero nostrum veniam hic doloribus iusto eaque. Modi beatae perspiciatis incidunt laboriosam officiis eaque accusamus ipsa at omnis voluptate, rerum consequuntur repellendus eum recusandae id error mollitia pariatur hic labore molestiae, ullam optio. Veritatis perferendis at soluta inventore tempora. Veritatis, et facilis enim aspernatur quasi cum dolores harum eum commodi sapiente eligendi? Nulla impedit facilis nam, minima odio sapiente, reiciendis enim delectus perferendis, rerum quam sed in eveniet laudantium obcaecati quas aliquam. Impedit, asperiores eaque.</p>
        </div>
      </div>
    </>
  );
}
export default Courses;
