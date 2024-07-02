import React, { useEffect, useState } from "react";
import Products from "./Products";
import Form from "../components/Form";

const Home = () => {
  const [data, setData] = useState({});
  const token = "";
  useEffect(() => {
    fetch(
      "http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000",
      {
        headers: {
          Authorization: `Bearer`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Form data={data} setData={setData} />
    </div>
  );
};

export default Home;
