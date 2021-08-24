import React, { useState, useEffect } from "react";
import Loading from "../components/Loading/Loading";
import ProductCard from "../components/ProductCard/ProductCard";
import { getProductList } from "./../services/service";
import { getFilters } from "./../services/service";
import Filter from "./../components/Filter/Filter";
import { useHistory, useLocation } from "react-router-dom";
import qs from "qs";

const ProductList = () => {
  const location = useLocation();
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [filterCategories, setFilterCategories] = useState([]);
  const [filtersLoading, setFiltersLoading] = useState(true);
  const [sortBy, setSortBy] = useState("Relevance");

  useEffect(() => {
    const queryString = location.search.toString().replace("?", "");
    const activeFilters = Object.values(qs.parse(queryString));
    async function fetchFilterData() {
      const result = await getFilters();
      if (result.success) {
        const tempFilterList = result.data.filterList.map((filter) => {
          if (
            activeFilters.find((activeFilter) => {
              return (
                activeFilter.category === filter.category &&
                activeFilter.value === filter.value
              );
            })
          ) {
            filter.checked = true;
            return filter;
          } else return filter;
        });
        setFilterList(tempFilterList);
        setFilterCategories(result.data.filterCategories);
        setFiltersLoading(false);
      }
    }

    fetchFilterData();
  }, [location.search]);

  useEffect(() => {
    async function fetchProductData() {
      const filters = filterList
        .filter((filter) => {
          return filter.checked === true;
        })
        .map((activefilter) => {
          return {
            category: activefilter.category,
            value: activefilter.value,
          };
        });
      history.push("/shop/products?" + qs.stringify(filters));
      const result = await getProductList(filters);
      setProducts(result.data.products);
    }
    fetchProductData();
  }, [filterList, history]);

  function handleFilterChange(filterCategory, filterValue, filterActive) {
    const tempFilterList = [...filterList];
    let index = tempFilterList.findIndex((filter) => {
      return filter.category === filterCategory && filter.value === filterValue;
    });
    tempFilterList[index].checked = filterActive;
    setFilterList(tempFilterList);
  }

  function handleSortPreferenceChange(newPreference) {
    setSortBy(newPreference);
  }

  function mapTagValues() {
    let tags = [];
    for (let i = 0; i < filterList.length; i++) {
      if (filterList[i].checked) {
        let tag = (
          <span
            className="tag is-rounded is-info is-light"
            key={filterList[i].value + filterList[i].category}
          >
            {filterList[i].value}
            <button
              className="delete"
              onClick={() =>
                handleFilterChange(
                  filterList[i].category,
                  filterList[i].value,
                  false
                )
              }
            ></button>
          </span>
        );
        tags.push(tag);
      }
    }
    return tags;
  }

  function clearAllActiveFilters() {
    let tempFilterList = [...filterList];
    for (let filter of tempFilterList) {
      filter.checked = false;
    }
    setFilterList(tempFilterList);
  }

  return (
    <div>
      <div className="columns mr-4 ml-4">
        <div
          className="column is-2-widescreen  is-narrow-desktop"
          style={{ borderRight: "1px solid black" }}
        >
          <div>
            <div className="columns">
              <div className="column has-text-weight-bold ">Filters</div>
              <div
                className="is-clickable is-underlined column"
                onClick={() => clearAllActiveFilters()}
              >
                Clear All
              </div>
            </div>
            {filtersLoading ? (
              <Loading />
            ) : (
              <Filter
                filterCategories={filterCategories}
                filterList={filterList}
                handleFilterChange={handleFilterChange}
              />
            )}
          </div>
        </div>
        <div className="column is-10 m-0">
          <div className="columns">
            <div className="column tags are-medium ">{mapTagValues()}</div>
            <div className="column is-narrow">
              <SortDropDown
                sortBy={sortBy}
                handleSortPreferenceChange={handleSortPreferenceChange}
              />
            </div>
          </div>
          <div className="columns is-multiline ">
            {products.map((product, index) => {
              return <ProductCard product={product} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

function SortDropDown({ sortBy, handleSortPreferenceChange }) {
  const sortPreferences = [
    "Relevance",
    "Popularity",
    "Price: Low To High",
    "Price: High To Low",
  ];

  return (
    <div className="dropdown is-hoverable is-right">
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>
            Sort By : <strong>{sortBy}</strong>{" "}
          </span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {sortPreferences.map((pref) => {
            return (
              <div
                className="dropdown-item is-clickable"
                key={pref}
                onClick={() => handleSortPreferenceChange(pref)}
              >
                {pref}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
