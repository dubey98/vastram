import React, { useState, useEffect } from "react";
import { getFilters } from "../../services/service";

const FilterItem = ({ title, filters }) => {
  const [filterCheck, setFilterCheck] = useState([]);

  useEffect(() => {
    const tempFilterCheck = [];
    filters.forEach((val) => {
      tempFilterCheck.push({ value: val, checked: false });
    });
    setFilterCheck(tempFilterCheck);
  }, [title, filters]);

  function handleFilterClick(index) {
    const tempFilterCheck = [...filterCheck];
    tempFilterCheck[index].checked = true;
    setFilterCheck(tempFilterCheck);
  }

  return (
    <div className="block">
      <div className="has-text-weight-bold is-uppercase">{title}</div>
      <div className="p-1 has-text-weight-medium">
        {filterCheck.map((filter, index) => {
          return (
            <div className="checkbox is-block" key={index}>
              <input
                type="checkbox"
                className="mr-3"
                checked={filter.checked}
              />
              <span onCLick={() => handleFilterClick(index)}>
                {filter.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Filter = ({ category }) => {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await getFilters(category);
      if (result.success) {
        setFilters(result.data);
      } else {
        setFilters([]);
      }
    }

    fetchData();
  }, [category]);

  return (
    <div>
      <div>
        <div
          className="has-text-weight-bold has-text-left is-uppercase is-size-5"
          style={{ float: "left" }}
        >
          Filters
        </div>
        <div className="has-text-right ">Clear All</div>
      </div>
      <div className="p-3 content is-clearfix">
        {filters.map((val, index) => {
          return (
            <FilterItem title={val.title} filters={val.filters} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
