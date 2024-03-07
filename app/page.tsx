import { retriveAllTodos } from "@/lib/GetData";
import TodoForm from "./components/TodoForm";

export default async function Home() {
  const allItems = await retriveAllTodos();

  return (
    <main className="mt-24">
      {/* Form  */}
      <TodoForm allItems={allItems}/>
    </main>
  );
}
