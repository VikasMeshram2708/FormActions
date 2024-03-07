"use server";


import { TodosCollection } from "./Db";

export const retriveAllTodos = async () => {
  const response = await TodosCollection.find({}).toArray();
  return response;
};
