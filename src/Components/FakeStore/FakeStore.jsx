import axios from "axios";
import { useEffect, useState } from "react";

export const FakeStore = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios("https://fakestoreapi.com/products");
    console.log("response.data", response.data);
    setData(response.data);
    console.log("data", data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>FakeStore</h1>
    </div>
  );
};
