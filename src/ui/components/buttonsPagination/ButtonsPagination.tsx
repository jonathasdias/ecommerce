import { useLayoutEffect } from 'react';
import { FaLeftLong, FaRightLong } from 'react-icons/fa6';
import { useSearchParams } from "react-router-dom";

interface ButtonsPaginationProps {
    currentPage: number;
    totalPages: number;
}

const ButtonsPagination: React.FC<ButtonsPaginationProps> = ({ currentPage, totalPages }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const page = searchParams.get('page');

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    const onPageChange = (page: number): void => {
        setSearchParams(params => {
          params.set('page', page.toString());
          return params
        });
    };

    const handlePrevious = () => {

        if(currentPage - 1 <= 0) {
            return
        }

        setSearchParams(params => {
            params.set('page', (currentPage - 1).toString());
            return params
        });
    };

    const handleNext = () => {
        if(currentPage + 1 > totalPages) {
            return
        }

        setSearchParams(params => {
            params.set('page', (currentPage + 1).toString());
            return params
        });
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPageNumbersToShow = 5;
        const halfMaxPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2);
        const startPage = Math.max(2, currentPage - halfMaxPageNumbersToShow);
        const endPage = Math.min(totalPages - 1, currentPage + halfMaxPageNumbersToShow);

        const createButton = (page: number) => (
            <button
                key={page + "button"}
                onClick={() => onPageChange(page)}
                aria-current={currentPage === page ? 'page' : undefined}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === page
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                    }`}
            >
                {page}
            </button>
        );

        pageNumbers.push(createButton(1));

        if (startPage > 2) {
            pageNumbers.push(<span key="start-ellipsis" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700">...</span>);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(createButton(i));
        }

        if (endPage < totalPages - 1) {
            pageNumbers.push(<span key="end-ellipsis" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700">...</span>);
        }

        pageNumbers.push(createButton(totalPages));

        return pageNumbers;
    };

    return (
        <nav className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 overflow-hidden">
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    onClick={handlePrevious}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    disabled={currentPage === 1}
                >
                    <FaLeftLong className="h-5 w-5" aria-hidden="true" />
                </button>

                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    {renderPageNumbers()}
                </nav>

                <button
                    onClick={handleNext}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    disabled={currentPage === totalPages}
                >
                    <FaRightLong className="h-5 w-5" aria-hidden="true" />
                </button>
            </div>

            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Mostrando de <span className="font-medium">{(currentPage - 1) * 20 + 1}</span> a <span className="font-medium">{Math.min(currentPage * 20, totalPages * 20)}</span> de <span className="font-medium">{totalPages * 20}</span> resultados
                    </p>
                </div>

                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <button
                            onClick={handlePrevious}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            disabled={currentPage === 1}
                        >
                            <span className="sr-only">Previous</span>
                            <FaLeftLong className="h-5 w-5" aria-hidden="true" />
                        </button>

                        {renderPageNumbers()}

                        <button
                            onClick={handleNext}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            disabled={currentPage === totalPages}
                        >
                            <span className="sr-only">Next</span>
                            <FaRightLong className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </nav>
                </div>
            </div>

        </nav>
    );
};

export default ButtonsPagination;