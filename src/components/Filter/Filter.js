function Filter({ filterCategory, filterList, handleFilterChange }) {
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
            {filterList[i].value}
          </div>
        );
        filters.push(filter);
      }
    }
    return filters;
  }

  return (
    <div>
      {filterCategory.map((category, index) => {
        return (
          <div key={index}>
            <div className="has-text-weight-bold is-uppercase">{category}</div>
            <div className="has-text-weight-medium">
              {mapFilterValues(category)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Filter;
