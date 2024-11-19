import { Link } from "react-router-dom";
import Button from "./Components/Button/Button";
import "./index.css";

export default function App() {
  let tasks = [
    {
      task: "Ma khana khanxu",
    },
    {
      task: "Ma luga dhunxu",
    },
    {
      task: "Ma test garxu",
    },
  ];
  return (
    <>
      <label>Your Todays Top 3 tasks</label>
      {tasks?.map((value, index) => {
        return <li key={index}>{value.task}</li>;
      })}
      <Link to={"/addtask"}>
        <Button btn={"Add Task"} />
      </Link>
      <Button btn={"Update Task"} />
    </>
  );
}
