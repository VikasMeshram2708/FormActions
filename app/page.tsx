"use client";

export default function Home() {
  const handleSearch = async (data: FormData) => {
    const todo = data.get("name");
    console.log(todo);
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
    </main>
  );
}
