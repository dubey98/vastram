import React from "react";

const FilterItem = (props) => {
  const { title, filters } = props;

  return (
    <div className="block">
      <div className="has-text-weight-bold is-uppercase">{title}</div>
      <div className="p-1 has-text-weight-medium">
        {filters.map((val) => {
          return (
            <div class="checkbox is-block">
              <input type="checkbox" className="mr-3" />
              {val}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Filter = () => {
  const filtersData = [
    {
      title: "CATEGORIES",
      filters: ["men", "women", "kids", "Home & Living", "Beauty"],
    },
    {
      title: "Brands",
      filters: ["adidas", "nike", "myntra", "amazon", "flipkart"],
    },
  ];

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
        {filtersData.map((val) => {
          return <FilterItem title={val.title} filters={val.filters} />;
        })}
      </div>
    </div>
  );
};

export default Filter;
