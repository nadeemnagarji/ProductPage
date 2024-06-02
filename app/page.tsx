"use client";

import ProductsPage from "@/components/ProductsPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  console.log(search);

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 ">
      <div className=" w-full  flex  items-center justify-center gap-5 mt-10 px-4 py-2">
        <Input
          placeholder="Search Products"
          onChange={(e) => setSearch(e.target.value)}
          className="md:w-1/2 w-full"
        />
        <Button size={"lg"}>Search</Button>
      </div>
      <div className="flex w-full md:w-[90%]  bg-gray-200 py-6 rounded-md ">
        <ProductsPage input={search} />
      </div>
    </main>
  );
}
