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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5OTA0NTUzLCJpYXQiOjE3MTk5MDQyNTMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQxMWU3MjBiLWJiNGEtNDhmMi1iNTY5LTk2OWZmOGVkMzM4MCIsInN1YiI6InN1cnlhY3AuY29tQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6Ik1haGVuZHJhIGNvbGxlZ2Ugb2YgZW5naW5lZXJpbmciLCJjbGllbnRJRCI6ImQxMWU3MjBiLWJiNGEtNDhmMi1iNTY5LTk2OWZmOGVkMzM4MCIsImNsaWVudFNlY3JldCI6InBMSFZkWVdNeXRURmFQd2QiLCJvd25lck5hbWUiOiJTdXJ5YSBDIiwib3duZXJFbWFpbCI6InN1cnlhY3AuY29tQGdtYWlsLmNvbSIsInJvbGxObyI6IjYyMTUyMTEwNDEzOSJ9.DUCfsL1WGH3PXPAgIK56-TFu2MD2_hujNxz4RoLzES4`,
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
