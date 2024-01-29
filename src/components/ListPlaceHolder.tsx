function ListPlaceHolder() {
  return (
    <div className="flex gap-3 flex-col px-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          className="w-full rounded  h-10 animate-pulse bg-neutral-600"
          key={index}
        ></div>
      ))}
    </div>
  );
}

export default ListPlaceHolder;
