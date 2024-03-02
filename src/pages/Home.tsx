import useFetch from "../hooks/useFetch";
import parse from "html-react-parser";
function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/news");
  return (
    <div className="container">
      <ul className="max-container">
        {data &&
          data.map((newArticle: object) => {
            return <li className="items">{parse(newArticle?.body)}</li>;
          })}
      </ul>
    </div>
  );
}

export default Home;
