"use server";

import { ObjectId } from "mongodb";
import { TodosCollection } from "./Db";
import { revalidatePath } from "next/cache";

export const handleDelete = async (todoId: string) => {
  try {
    const deleteResult = await TodosCollection.deleteOne({
      _id: new ObjectId(todoId),
    });

    revalidatePath("/");
    return deleteResult;
  } catch (error) {
    console.log("Failed to delete", error instanceof Error && error?.message);
  }
};
