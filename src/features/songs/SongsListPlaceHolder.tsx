function SongsListPlaceHolder() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-col-8 gap-4 mt-4 ">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className=" relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 "
        >
          <div className=" relative aspect-square w-full h-full rounded-md overflow-hidden ">
            <div className="animate-pulse bg-neutral-400/10 w-full h-full rounded-md overflow-hidden"></div>
          </div>
          <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <div className="animate-pulse bg-neutral-400/10 w-full h-4 rounded-md overflow-hidden"></div>
            <div className="animate-pulse bg-neutral-400/10 w-full h-4 rounded-md overflow-hidden"></div>
          </div>
          <div className=" absolute bottom-24 right-5 ">
            <div className="animate-pulse bg-neutral-400/10 w-10 h-10 rounded-md overflow-hidden"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SongsListPlaceHolder;
