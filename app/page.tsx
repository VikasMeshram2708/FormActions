import { TodosCollection } from "@/lib/Db";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const retriveAllTodos = async () => {
    const response = await TodosCollection.find({}).toArray();
    return response;
  };
  const allItems = await retriveAllTodos();
  console.log(allItems);

  const handleSearch = async (data: FormData) => {
    "use server";

    const todo = data.get("name");
    console.log(todo);

    await TodosCollection.insertOne({todo});

    // Revalidate the path
    revalidatePath('/')
    return console.log("Successfully inserted the data");
  };

  return (
    <main className="mt-24">
      <form
        action={handleSearch}
        className="bg-accent max-w-xl mx-auto rounded p-5"
      >
        <div className="">
          <input
            type="text"
            className="form-control p-2 rounded"
            placeholder="Enter name"
            name="name"
            id="name"
          />
          <button type="submit" className="mt-5 btn btn-primary btn-sm">
            Search
          </button>
        </div>
      </form>

      {/* todos  */}
      <ul className="mt-5 max-w-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {allItems?.map((item, index) => {
          return (
            <div className="border-2 border-purple-500 p-2 flex items-center justify-between rounded" key={item?._id.toString()}>
              <h1>{item?.todo}</h1>
              <button type="button" className="btn btn-error btn-sm">Delete</button>
            </div>
          );
        })}
      </ul>
    </main>
  );
}
