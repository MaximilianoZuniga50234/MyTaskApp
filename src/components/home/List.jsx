import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../../context/tasks/TaskSlice";
import { Link } from "react-router-dom";
import "./list.css";

const List = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex items-center py-4 justify-between font-bold">
        <h1 className="ml-1 text-xl">Tasks {tasks.length}</h1>
        <Link
          to="/create-task"
          className="bg-emerald-400 text-black px-2 py-1 rounded-md hover:bg-emerald-300"
        >
          New Task
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div className="bg-slate-900 p-4 rounded-lg h-auto" key={task.id}>
            <header className="flex justify-between mb-1">
              <h1>{task.title}</h1>
              <div className="flex justify-between gap-x-2">
                <Link
                  className="text-black bg-zinc-600 rounded-lg text-xs px-2 py-1 font-bold"
                  to={`/edit-task/${task.id}`}
                >
                  Edit
                </Link>
                <button
                  className="text-black bg-red-500 rounded-lg text-xs px-2 py-1 font-bold"
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </header>
            <p className="descriptionContainer overflow-auto">{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
