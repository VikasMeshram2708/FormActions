"use client";

import React from "react";
import { useFormStatus } from "react-dom";

export default function Button() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit" className="mt-5 btn btn-primary btn-sm">
      {pending ? "Loading..." : "Search"}
    </button>
  );
}
