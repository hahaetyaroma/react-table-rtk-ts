import { useMemo, useState } from "react";
import TableSort from "./components/TableSort";
import { Pagination } from "./components/Pagination";
import { useGetPostsQuery } from "./services/posts";
import "./styles/App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const { data: posts = [], isLoading } = useGetPostsQuery(50);

  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  const currentData = posts.slice(firstDataIndex, lastDataIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const nextPage = () =>
    currentPage >= 5 ? setCurrentPage(5) : setCurrentPage((next) => next + 1);
  const prevPage = () =>
    currentPage <= 1 ? setCurrentPage(1) : setCurrentPage((prev) => prev - 1);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Заголовок",
        accessor: "title",
      },
      {
        Header: "Описание",
        accessor: "body",
      },
    ],
    []
  );

  return (
    <div className="xl:container mx-auto grid justify-center ">
      {isLoading && <h1>Загруза...</h1>}
      <TableSort columns={columns} data={currentData} />
      <Pagination
        paginate={paginate}
        dataPerPage={dataPerPage}
        totalData={posts.length}
        onClickPrevPage={prevPage}
        onClickNextPage={nextPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
