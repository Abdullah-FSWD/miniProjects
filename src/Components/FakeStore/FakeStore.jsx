import axios from "axios";
import { useEffect, useState } from "react";
import { StoreCard } from "./StoreCard";
import "./FakeStore.css";
export const FakeStore = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios("https://fakestoreapi.com/products");
    console.log("response.data", response.data);
    setData(response.data);
    // console.log("data", data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="container">
      {data.map((item) => (
        <StoreCard data={item} key={item.id} />
      ))}
    </div>
  );
};
