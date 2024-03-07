import { retriveAllTodos } from "@/lib/GetData";
import TodoForm from "./components/TodoForm";

export default async function Home() {
  const allItems = await retriveAllTodos();
  console.log(allItems);

  // const handleDelete = async (todoId: string) => {
  //   try {
  //     await TodosCollection.deleteOne({
  //       _id: new ObjectId(todoId),
  //     });
  //   } catch (error) {
  //     console.log("Failed to delete", error instanceof Error && error?.message);
  //   }
  // };

  return (
    <main className="mt-24">
      {/* Form  */}
      <TodoForm />

      {/* todos  */}
      <ul className="mt-5 max-w-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {allItems?.map((item) => {
          return (
            <div
              className="border-2 border-purple-500 p-2 flex items-center justify-between rounded"
              key={item?._id.toString()}
            >
              <h1>{item?.todo}</h1>
              <button
                // onClick={() => handleDelete(item?._id.toString())}
                type="button"
                className="btn btn-error btn-sm"
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </main>
  );
}
