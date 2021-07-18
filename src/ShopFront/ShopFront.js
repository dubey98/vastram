import React, { useState, useEffect } from "react";
import HomeComponent from "../components/HomeConponent/HomeComponent";
import { getFrontPageData } from "./../services/service";

const ShopFront = (props) => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      if (!ignore) {
        console.log("making a request");
        const result = await getFrontPageData(props.category);
        setData(result.data);
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [props.category]);

  return (
    <div>
      <HomeComponent data={data} />
    </div>
  );
};

export default ShopFront;
