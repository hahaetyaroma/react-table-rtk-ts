import { BrowserRouter as Router, Link } from "react-router-dom";
export const Pagination = ({
  dataPerPage,
  totalData,
  paginate,
  onClickPrevPage,
  onClickNextPage,
  currentPage,
}: {
  dataPerPage: number;
  totalData: number;
  paginate: any;
  onClickPrevPage: any;
  onClickNextPage: any;
  currentPage: number;
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <ul className="flex justify-around py-[16px]">
        <Router>
          <Link to={`${currentPage}`}>
            <button className="text-2xl font-medium" onClick={onClickPrevPage}>
              Назад
            </button>
          </Link>
          <div className="flex font-bold italic items-center tracking-[8px]">
            {pageNumber.map((number) => (
              <li key={number}>
                <Link
                  onClick={() => {
                    paginate(number);
                  }}
                  to={`/${number}`}
                >
                  {number}
                </Link>
              </li>
            ))}
          </div>
          <Link to={`${currentPage}`}>
            <button className="text-2xl	font-medium" onClick={onClickNextPage}>
              Далее
            </button>
          </Link>
        </Router>
      </ul>
    </div>
  );
};
