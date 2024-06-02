"use client";
import ProductsPage from "@/components/ProductsPage";
import { SelectComp } from "@/components/SelectComponent";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string | null>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(null);
    setSearch(e.target.value);
  };
  return (
    <main className="flex min-h-screen flex-col items-center gap-10  ">
      <div className=" w-full fixed z-50 flex sm:flex-row flex-col items-center justify-center gap-6 max-sm:h-[14%] max-sm:mt-4   sm:mt-10 px-4 pt-4">
        <Input
          placeholder="Search Products"
          onChange={(e) => handleSearch(e)}
          className="md:w-1/2  w-full"
        />

        <SelectComp setCategory={setCategory} />
      </div>
      <div className="flex w-full  md:w-[90%] mt-32  grow overflow-hidden bg-gray-200 py-6 rounded-md mb-10 z-40">
        <ProductsPage input={search} category={category} />
      </div>
    </main>
  );
}
