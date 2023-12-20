// import { useEffect } from "react";
import { createContext, useEffect, useState } from "react";
import { FetchData } from "../Components/Subcomponents/FetchData";

export const DataContext = createContext();

const AuthContextProvider = (props) => {
  const url = "http://localhost:8080/api/v1/";

  const [user, setUser] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (localStorage.getItem("user") !== null) {
        setUser(localStorage.getItem("user"));
      } else {
        setUser("");
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(user);
  });

  const fields = [
    { id: "ZoneName", value: "zone_name", type: 2, setting: "Dropdown" },
    { id: "StateName", value: "state_name", type: 2, setting: "Dropdown" },
    { id: "StoreName", value: "store_name", type: 2, setting: "Dropdown" },
    // prettier-ignore
    { id: "Store Code", value: "alternate_store_code", type: 2, setting: "Dropdown" },
    { id: "BillDate", value: "bill_date", type: 3, setting: "Calender" },
    // prettier-ignore
    { id: "CustomerMobile", value: "customer_mobile", type: 1, setting: "Input" },
    { id: "Quantity", value: "quantity", type: 3, setting: "Input" },
    { id: "BaseValue", value: "base_value", type: 3, setting: "Input" },
    { id: "Tax", value: "tax", type: 3, setting: "Input" },
    { id: "Amount", value: "amount", type: 3, setting: "Input" },
    // prettier-ignore
    // { id: "Mode of Payment", value: "ModeofPayment", type: 2, setting: "Dropdown" },
    // prettier-ignore
    { id: "Customer Type", value: "new_customer_type", type: 1, setting: "Dropdown" },
    {
      id: "CustomerCreatedOn",
      value: "customer_created_on",
      type: 3,
      setting: "Calender",
    },
    // prettier-ignore
    { id: "SalesType", value: "sales_type", type: 1, setting: "Dropdown" },
    { id: "City Name", value: "City_name", type: 2, setting: "Dropdown" },
    // prettier-ignore

    // { id: "CustomerBAPinCode", value: "CustomerBAPinCode", type: 3, setting: "Input" },
    // prettier-ignore
    { id: "ProductName", value: "product_name", type: 2, setting: "Dropdown" },
    // prettier-ignore
    { id: "CustomerCode", value: "customer_code", type: 2, setting: "Dropdown" },
    { id: "Category", value: "category_code", type: 2, setting: "Input" },
    // { id: "Color", value: "Color", type: 2, setting: "Dropdown" },
    // { id: "Size", value: "Size", type: 2, setting: "Dropdown" },
    // prettier-ignore
    { id: "TotalDiscAmount", value: "total_disc_amount", type: 3, setting: "Input" },
    { id: "Rate", value: "rate", type: 3, setting: "Input" },
    { id: "Header ID", value: "ws_bill_no", type: 1, setting: "Input" },
    // prettier-ignore
    // { id: "Repeat Customer", value: "RepeatCustomer", type: 1, setting: "Dropdown" },
    // prettier-ignore
    // { id: "Shopping Pattern", value: "ShoppingPattern", type: 1, setting: "Dropdown" },
  ];

  const operations = [
    { type: 1, id: "Equal To", value: "Equal To", symbol: "=" },

    { type: 2, id: "Multi Select", value: "In", symbol: "In" },
    { type: 2, id: "Equal To", value: "Equal To", symbol: "=" },

    { type: 3, id: "Equal To", value: "Equal To", symbol: "=" },
    { type: 3, id: "Less Than", value: "Less Than", symbol: "<" },
    { type: 3, id: "Greater Than", value: "Greater Than", symbol: ">" },
    { type: 3, id: "Between", value: "Between", symbol: "" },
  ];

  // const options = [
  //   { type: "ZoneName", id: "South", value: "South" },
  //   { type: "ZoneName", id: "West", value: "West" },
  //   { type: "ZoneName", id: "North", value: "North" },
  //   { type: "ZoneName", id: "East", value: "East" },

  //   { type: "State", id: "Tamil Nadu", value: "TamilNadu" },
  //   { type: "State", id: "Kerala", value: "Kerala" },
  // ];

  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("loading");

  useEffect(() => {
    async function fetchData() {
      const response = await FetchData({
        endpoint: url + "create/fetch",
      });

      if (response.error === "no error") {
        console.log(2111111);
        setData(response.data);
        setMsg("done");
      }
    }

    fetchData();
  }, []);

  const [options, setOptions] = useState([]);
  const [msg1, setMsg1] = useState("loading");

  useEffect(() => {
    async function fetchData() {
      const response = await FetchData({
        endpoint: url + "create/label",
      });

      if (response.error === "no error") {
        setOptions(response.data);
        setMsg1("done");
      }
    }

    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        fields,
        operations,
        options,
        url,
        data,
        msg1,
        user,
        msg,
        setUser,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default AuthContextProvider;
