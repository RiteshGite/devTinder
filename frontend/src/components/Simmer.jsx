const Shimmer = ({ count }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-4">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex w-full max-w-sm sm:w-52 flex-col gap-4"
          >
            <div className="skeleton h-48 sm:h-32 w-full"></div>
            <div className="skeleton h-4 w-32"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
