"use client";

import { handleSearch } from "@/lib/CreateTodos";
import React, { useOptimistic, useRef } from "react";
import Button from "./Button";
import { handleDelete } from "@/lib/DeleteTodo";

export default function TodoForm({ allItems }: any) {
  const ref = useRef<HTMLFormElement>(null);
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    allItems,
    (state, newTodo) => {
      return [...state, newTodo];
    }
  );

  return (
    <>
      <form
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();

          addOptimisticTodo({
            _id: Math.floor(1000 + Math.random() * 9000),
            todo: formData,
          });
          await handleSearch(formData);
        }}
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
          {/* Button component */}
          <Button />
        </div>
      </form>

      {/* Todos array */}
      {/* todos  */}
      <ul className="mt-5 max-w-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {optimisticTodos?.map((item: any) => {
          return (
            <div
              className="border-2 border-purple-500 p-2 line-clamp-1 flex items-center justify-between rounded"
              key={item?._id.toString()}
            >
              <h1>{item?.todo}</h1>
              <button
                onClick={() => handleDelete(item?._id.toString())}
                type="button"
                className="btn btn-error btn-sm"
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
}
