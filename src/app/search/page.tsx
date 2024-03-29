import React from "react";
import Header from "@/components/Header";
import SearchInput from "@/features/search/SearchInput";
import SearchList from "@/features/search/SearchList";

export default function SearchPage() {
  return (
    <div className=" bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto ">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchList />
    </div>
  );
}
