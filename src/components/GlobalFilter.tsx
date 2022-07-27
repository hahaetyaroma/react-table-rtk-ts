export const GlobalFilter = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: any;
}) => {
  return (
    <>
      <div className="pb-[15px] pt-[23px]">
        <input
          className="p-2 w-[630px] h-[40px] bg-[#5A5C66] text-white outline-none"
          placeholder="Поиск"
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </>
  );
};
