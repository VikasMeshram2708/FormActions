"use client";

import { handleSearch } from "@/lib/CreateTodos";
import React, { useRef } from "react";
import Button from "./Button";
import { handleDelete } from "@/lib/DeleteTodo";

export default function TodoForm({ allItems }: any) {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <>
      <form
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();
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
        {allItems?.map((item: any) => {
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
