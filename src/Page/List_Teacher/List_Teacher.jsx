import "./List_Teacher.css";
function List_Teacher({ menuCollapse }) {
  return (
    <>
      <div className="c-teacher"  style={{
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
          <h1>List_Teachers</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis et eum unde blanditiis animi quod facere amet incidunt magni sit. Exercitationem unde repellendus soluta sunt temporibus minus ducimus sed facere debitis quae quis deserunt, dolorem, dignissimos corporis architecto aperiam aliquam ullam! Consequatur optio saepe fuga quos quibusdam quam repudiandae repellendus expedita iste totam unde aperiam voluptatem distinctio asperiores nostrum ullam ea fugiat aut labore doloribus modi, quidem possimus minima? Soluta doloremque maxime eveniet recusandae, molestias dignissimos sequi eaque. Ratione quidem, libero labore omnis minus, repudiandae odit, inventore eius dolorum laborum deleniti. Voluptatum quisquam dolore quidem esse distinctio. Similique, delectus quia? Hic rerum sequi adipisci? Quisquam, commodi soluta repellat voluptatibus dolorum, unde neque magnam architecto perferendis rem culpa ducimus error velit veritatis cum. Reiciendis suscipit odio tempora itaque impedit accusamus voluptatum ullam! In iusto minima ex aliquam animi, voluptate quis sunt, expedita eius, nulla sint quia sapiente. Molestias saepe velit doloremque maxime rem, et vitae tempora alias aliquid blanditiis deleniti illo iste omnis quis odit numquam dicta nobis veritatis neque ea! Quae, nisi dolorum minus fuga sint pariatur voluptate autem tenetur quisquam suscipit recusandae reiciendis consequuntur dignissimos ab quia sit modi consectetur doloremque. Ad sequi asperiores, inventore maiores consequatur nulla, omnis vero similique explicabo delectus, unde tempore alias sit aspernatur placeat perferendis minima quasi esse. Fugiat dolore magni sapiente doloremque dolores? Sint est, maxime id quasi earum, consectetur molestias ab similique sunt debitis cupiditate qui non facilis natus atque voluptatum dolores asperiores corrupti enim minima necessitatibus soluta voluptate. Ipsum accusantium aliquid odio consequuntur architecto at sapiente placeat tempore dolor, repellat eveniet optio illum nisi error? Velit placeat impedit quam modi culpa, animi illo magni sunt, vitae tenetur dolor ullam officiis fuga voluptates, eaque eum ab nulla totam. Deleniti sint quam numquam saepe quo natus totam! Asperiores quos sit dolor exercitationem vero distinctio a itaque unde ut aut, esse, ratione corrupti nemo officia vel porro repellat, facilis voluptas expedita earum perferendis. Mollitia minus nam explicabo, atque sit necessitatibus eum dicta dolores voluptatem veniam deserunt ullam iure hic, expedita laudantium unde dolorem, alias ex maxime cum id. Obcaecati, corrupti consequuntur repudiandae reprehenderit labore quos itaque, a at ratione temporibus quisquam consectetur autem laboriosam harum reiciendis quaerat aliquam eos ipsam placeat incidunt voluptas, iure velit officia! Omnis exercitationem asperiores iusto aliquid ab nostrum consectetur eligendi, vitae possimus quis sint accusamus sunt quidem minima officiis quae ad temporibus voluptas facere similique repudiandae iste? Nisi, cum!</p>
        </div>
      </div>
    </>
  );
}
export default List_Teacher;
