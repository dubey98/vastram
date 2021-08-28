import React, { useState, useEffect } from "react";
import Loading from "../components/Loading/Loading";
import ProductCard from "../components/ProductCard/ProductCard";
import { getProductList } from "./../services/service";
import { getFilters } from "./../services/service";
import Filter from "./../components/Filter/Filter";
import { useHistory, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Pagination from "../components/Pagination/Pagination";
import qs from "qs";
// 1216 px
const ProductList = () => {
  const location = useLocation();
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [filterCategories, setFilterCategories] = useState([]);
  const [filtersLoading, setFiltersLoading] = useState(true);
  const [sortBy, setSortBy] = useState("Relevance");
  const [reloadProduct, setReloadProduct] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const isMobile = useMediaQuery({ query: "(max-width : 767px)" });
  const isTablet = useMediaQuery({ query: "(max-width : 1024px)" });
  const isDesktop = useMediaQuery({ query: "(max-width : 1215px)" });
  const isWideScreen = useMediaQuery({ query: "(max-width : 1410px)" });
  const isFullHd = useMediaQuery({ query: "(min-width : 1410px)" });

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

    fetchFilterData().then(() => setReloadProduct(!reloadProduct));
  }, [location.search]);

  useEffect(() => {
    async function fetchProductData() {
      const limit = getRenderCount();
      const offset = (currentPage - 1) * getRenderCount();
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
      const result = await getProductList(filters, limit, offset);
      setProducts(result.data.products);
      setLoading(false);
      setTotalPage(Math.ceil(result.data.totalCount / getRenderCount()) || 1);
    }
    fetchProductData();
  }, [reloadProduct, currentPage]);

  function getRenderCount() {
    const renderedProductCount = {
      mobile: 10,
      tablet: 30,
      desktop: 32,
      widescreen: 35,
      fullhd: 42,
    };

    Object.freeze(renderedProductCount);
    if (isMobile) {
      return renderedProductCount.mobile;
    } else if (isTablet) {
      return renderedProductCount.tablet;
    } else if (isDesktop) {
      return renderedProductCount.desktop;
    } else if (isWideScreen) {
      return renderedProductCount.widescreen;
    } else if (isFullHd) {
      return renderedProductCount.fullhd;
    }
  }

  function handleFilterChange(filterCategory, filterValue, filterActive) {
    const tempFilterList = [...filterList];
    let index = tempFilterList.findIndex((filter) => {
      return filter.category === filterCategory && filter.value === filterValue;
    });
    tempFilterList[index].checked = filterActive;
    setFilterList(tempFilterList);
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
    setReloadProduct(!reloadProduct);
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
    history.push("/shop/products");
    setFilterList(tempFilterList);
  }

  if (loading) {
    return <Loading />;
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

          <Pagination
            currentPage={currentPage}
            totalPage={totalPage}
            setCurrentPage={setCurrentPage}
          />
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
