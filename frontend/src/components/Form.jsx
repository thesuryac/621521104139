import React, { useState } from "react";

const Form = ({ data, setData }) => {
  const [company, setCompany] = useState(null);
  const [max, setMax] = useState(null);
  const [min, setMin] = useState(null);
  const [category, setCategory] = useState(null);
  const [rating, setRating] = useState(null);
  const [availability, setAvailability] = useState(null);
  const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
  const categories = [
    "Phone",
    "Computer",
    "TV",
    "Earphone",
    "Tablet",
    "Charger",
    "Mouse",
    "Keypad",
    "Bluetooth",
    "Pendrive",
    "Remote",
    "Speaker",
    "Headset",
    "Laptop",
    "PC",
  ];
  const handleCompany = (e) => {
    setCompany(e.target.value);
  };
  const handleMax = (e) => {
    setMax(e.target.value);
  };
  const handleMin = (e) => {
    setMin(e.target.value);
  };
  const handleCategories = (e) => {
    setCategory(e.target.value);
  };
  const handleAvailability = (e) => {
    setAvailability(e.target.value);
  };
  const handleRating = (e) => {
    setRating(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=10&minPrice=${min}&maxPrice=${max}`,
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
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <label htmlFor="company">company</label>
        <select onChange={handleCompany}>
          {companies.map((company) => (
            <option value={company}>{company}</option>
          ))}
        </select>
      </div>
      <div className="">
        <label>categories</label>
        <select onChange={handleCategories}>
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="">
        <label>rating</label>
        <input type="number" onChange={handleRating} />
      </div>
      <div className="">
        <label htmlFor="max">max</label>
        <input type="number" onChange={handleMax} />
        <label htmlFor="min">min</label>
        <input type="number" onChange={handleMin} />
      </div>
      <div className="">
        <label htmlFor="availability">availability</label>
        <select name="" id="" onChange={handleAvailability}>
          <option value="out-of-stock">out of stock</option>
          <option value="yes">yes</option>
        </select>
      </div>
      <button>submit</button>
    </form>
  );
};

export default Form;
