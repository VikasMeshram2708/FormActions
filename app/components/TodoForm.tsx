"use client";

import { handleSearch } from "@/lib/CreateTodos";
import React, { useRef } from "react";
import Button from "./Button";
import { useFormStatus } from "react-dom";

export default function TodoForm() {
  const ref = useRef<HTMLFormElement>(null);
  return (
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
  );
}
