import {
  useExpanded,
  useGroupBy,
  useSortBy,
  useTable,
  useGlobalFilter,
} from "react-table";
import { GlobalFilter } from "./GlobalFilter";
import arrowDown from "../icons/arrowDown.svg";

export default function ProductTable({ columns, data }) {
  const {
    setGlobalFilter,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useGroupBy,
    useSortBy,
    useExpanded
  );
  const { globalFilter } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table className="border" {...getTableProps()}>
        <thead className="border">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="first:w-[110px] last:w-[430px] even:w-[530px] bg-[#474955] text-white h-[54px] pl-[23px]"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span>
                    <img
                      className="display: inline-block pl-[40px]"
                      src={arrowDown}
                      alt="arrowDown"
                    />
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr className="border" {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="border first:px-[50px] p-[10px]"
                      {...cell.getCellProps()}
                    >
                      {cell.isGrouped ? (
                        <>
                          {cell.render("Cell")} ({row.subRows.length})
                        </>
                      ) : cell.isAggregated ? (
                        cell.render("Aggregated")
                      ) : cell.isPlaceholder ? null : (
                        cell.render("Cell")
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
