"use server";
import { revalidatePath } from "next/cache";
import { TodosCollection } from "./Db";

export const handleSearch = async (data: FormData) => {
  const todo = data.get("name");
  console.log(todo);

  await TodosCollection.insertOne({ todo });

  // Revalidate the path
  revalidatePath("/");
  return console.log("Successfully inserted the data");
};
