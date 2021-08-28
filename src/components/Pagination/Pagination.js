function Pagination({ currentPage, totalPage, setCurrentPage }) {
  function mapPageButtons() {
    const retPageList = [];
    const normalBtn = "pagination-link button is-clickable is-white is-rounded";
    const primaryBtn = "pagination-link button is-clickable is-link is-rounded";

    if (totalPage < 8) {
      addPageNumberBetween(1, totalPage);
    } else {
      if (currentPage < 5) {
        addPageNumberBetween(1, 5);
        addEndWithEllipsis();
      } else if (currentPage > totalPage - 4) {
        addStartWithEllipsis();
        addPageNumberBetween(totalPage - 4, totalPage);
      } else {
        addStartWithEllipsis();
        addPageNumberBetween(currentPage - 1, currentPage + 1);
        addEndWithEllipsis();
      }
    }

    function addPageNumberBetween(startPageNumber, endPageNumber) {
      for (let pageNo = startPageNumber; pageNo <= endPageNumber; pageNo++) {
        const pageElement = (
          <li key={pageNo}>
            <button
              className={pageNo === currentPage ? primaryBtn : normalBtn}
              aria-label={"Go to Page" + pageNo.toString()}
              onClick={() => setCurrentPage(pageNo)}
            >
              {pageNo}
            </button>
          </li>
        );
        retPageList.push(pageElement);
      }
    }

    function addEndWithEllipsis() {
      retPageList.push(
        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
      );
      retPageList.push(
        <li>
          <button
            className={normalBtn}
            aria-label={"Go to Page" + totalPage.toString()}
            onClick={() => setCurrentPage(totalPage)}
          >
            {totalPage}
          </button>
        </li>
      );
    }

    function addStartWithEllipsis() {
      retPageList.push(
        <li>
          <button
            className={normalBtn}
            aria-label={"Go to Page 1"}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
        </li>
      );
      retPageList.push(
        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
      );
    }

    return retPageList;
  }

  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <button
        className={"pagination-previous button is-link is-outlined"}
        onClick={() => {
          if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
          }
        }}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        className="pagination-next button is-link is-outlined"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        Next Page
      </button>
      <ul className="pagination-list">{mapPageButtons()}</ul>
    </nav>
  );
}

export default Pagination;
