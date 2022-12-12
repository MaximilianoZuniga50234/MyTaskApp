const Form = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-700">
      <div className="bg-slate-900 text-white w-1/4 h-1/3 p-4 flex flex-col rounded-2xl">
        <div className="h-3/4 w-full mt-4 p-2 flex flex-col gap-4">
          <div className="h-1/3 w-full flex flex-col gap-1">
            <label className="text-md font-semibold block">Title</label>
            <input
              placeholder="New title"
              type="text"
              className="text-black bg-slate-200 w-full rounded-xl px-2 py-1"
            />
          </div>
          <div className="h-2/3 w-full flex flex-col gap-1">
            <label className="text-md font-semibold block">Description</label>
            <textarea
              placeholder="New description"
              type="text"
              className="text-black bg-slate-200 w-full h-4/5 rounded-xl resize-none px-2 py-1"
            ></textarea>
          </div>
        </div>
        <div className="h-1/4 w-full flex justify-between items-end p-2 text-black font-semibold text-sm">
          <button className="bg-red-500 hover:bg-red-400 rounded-md px-2 py-1">Cancel</button>
          <button className="bg-emerald-400 hover:bg-emerald-300 rounded-md px-2 py-1">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
