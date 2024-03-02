import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useFetch from "../hooks/useFetch";
import { v4 as uuidv4 } from "uuid";

function Create() {
  const [value, setValue] = useState("");
  const { data, isPending, error, addNewPost } = useFetch(
    "http://localhost:3000/news",
    "POST"
  );
  console.log(data, isPending, error);
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  const module = {
    toolbar: toolbarOptions,
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newArticle = {
      id: uuidv4(),
      body: value,
    };
    addNewPost(newArticle);
  };
  return (
    <div>
      <section className="create-page">
        <div className="create-page container">
          <h1 className="create__title">Create page</h1>
          <form onSubmit={handleSubmit}>
            <ReactQuill
              modules={module}
              theme="snow"
              value={value}
              onChange={setValue}
            />
            <button className="create__button">Create</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Create;
