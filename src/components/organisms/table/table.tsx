import { useEffect, useState } from "react";
import { Pagination } from "../../molecules/pagination";
import { TableProps } from "../../../types/interface.table";
import { Links } from "../../atoms/link/links";

export const Table = ({
  data,
  title,
  pagination,
  setPaginationValue,
}: TableProps) => {

  const [currentPage, setCurrentPage] = useState(1);

const incrementPagination = () => {
  setPaginationValue((prev: { offset: string }) => ({
    ...prev,
    offset: String(Number(prev.offset) + 10),
  }));
  setCurrentPage((prev) => prev + 1);
};

const decrementPagination = () => {
  setPaginationValue((prev: { offset: string }) => ({
    ...prev,
    offset: String(Math.max(0, Number(prev.offset) - 10)),
  }));
  setCurrentPage((prev) => Math.max(1, prev - 1));
};


  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="  w-[1000px]">
      <div
        className="h-96 sm:h-[450px]  overflow-y-scroll scrollbar-hide"
        style={{
          overflowY: "scroll",
          scrollbarWidth: "none" ,
          msOverflowStyle: "none" ,
        }}
      >
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
            <tr>
              {title.map((item, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="">
            {data.map((item , index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.name}
                </th>
                <td className="px-6 py-4">
                  <Links to={`pokemon/${item.name}`}>
                    <img
                      src={item.img}
                      alt=""
                      className="w-12 border rounded-full"
                      onClick={() => {
                        const audio = new Audio("/assets/sounds/beep-07.wav");
                        audio.play();
                      }}
                    />
                  </Links>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pagination.count > 10 && (
        <Pagination
          pagination={pagination}
          incrementPagination={incrementPagination}
          decrementPagination={decrementPagination}
          currentPage={currentPage}
          setPaginationValue={setPaginationValue}
        />
      )}
    </div>
  );
};
