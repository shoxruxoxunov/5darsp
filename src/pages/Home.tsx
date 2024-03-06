import useFetch from "../hooks/useFetch";
import parse from "html-react-parser";
type newArticle = {
  id: string;
  body: string;
};
function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/news");
  console.log(isPending, error);
  return (
    <div className="container">
      <ul className="max-container">
        {data &&
          data.map((newArticle: newArticle) => {
            return (
              <li key={newArticle.id} className="items">
                <div>{parse(newArticle?.body)}</div>
                <button>Delete</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Home;
