function Filter({
  filterCategories,
  filterList,
  handleFilterChange,
  showCollapseFilterButton,
  handleExpandFilters,
}) {
  function mapFilterValues(category) {
    let filters = [];
    for (let i = 0; i < filterList.length; i++) {
      if (filterList[i].category === category) {
        let filter = (
          <div key={filterList[i].value}>
            <input
              type="checkbox"
              className="mr-3"
              checked={filterList[i].checked}
              onChange={() =>
                handleFilterChange(
                  filterList[i].category,
                  filterList[i].value,
                  !filterList[i].checked
                )
              }
            />
            <span
              className="is-clickable"
              onClick={() =>
                handleFilterChange(
                  filterList[i].category,
                  filterList[i].value,
                  !filterList[i].checked
                )
              }
            >
              {filterList[i].display}
            </span>
          </div>
        );
        filters.push(filter);
      }
    }
    return filters;
  }

  return (
    <div>
      {filterCategories.map((category, index) => {
        return (
          <div key={index} className="block">
            <div className="has-text-weight-bold is-uppercase pb-2">
              {category.display}
            </div>
            <div className="has-text-weight-medium is-size-7">
              {mapFilterValues(category.category)}
            </div>
          </div>
        );
      })}
      {showCollapseFilterButton ? (
        <div className="block">
          <button className="button" onClick={(e) => handleExpandFilters(e)}>
            Collapse filters
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Filter;
