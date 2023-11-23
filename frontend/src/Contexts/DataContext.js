// import { useEffect } from "react";
import { createContext, useEffect, useState } from "react";
import { FetchData } from "../Components/Subcomponents/FetchData";

export const DataContext = createContext();

const AuthContextProvider = (props) => {
  const url = "http://localhost:8080/api/v1/";

  const fields = [
    { id: "ZoneName", value: "ZoneName", type: 2, setting: "Dropdown" },
    { id: "RegionName", value: "RegionName", type: 2, setting: "Dropdown" },
    { id: "StoreName", value: "StoreName", type: 2, setting: "Dropdown" },
    // prettier-ignore
    { id: "AlternateStoreCode", value: "AlternateStoreCode", type: 2, setting: "Dropdown" },
    { id: "BillDate", value: "BillDate", type: 3, setting: "Calender" },
    // prettier-ignore
    { id: "CustomerMobile", value: "CustomerMobile", type: 1, setting: "Input" },
    { id: "Quantity", value: "Quantity", type: 3, setting: "Input" },
    { id: "BaseValue", value: "BaseValue", type: 3, setting: "Input" },
    { id: "Tax", value: "Tax", type: 3, setting: "Input" },
    { id: "Amount", value: "Amount", type: 3, setting: "Input" },
    // prettier-ignore
    // { id: "Mode of Payment", value: "ModeofPayment", type: 2, setting: "Dropdown" },
    // prettier-ignore
    // { id: "Customer Type", value: "CustomerType", type: 1, setting: "Dropdown" },
    { id: "CustomerCreatedOn", value: "CustomerCreatedOn", type: 3, setting: "Calender" },
    // prettier-ignore
    { id: "SalesType", value: "SalesType", type: 1, setting: "Dropdown" },
    // { id: "City Name", value: "CityName", type: 2, setting: "Dropdown" },
    // prettier-ignore

    { id: "CustomerBAPinCode", value: "CustomerBAPinCode", type: 3, setting: "Input" },
    // prettier-ignore
    { id: "ProductName", value: "ProductName", type: 2, setting: "Dropdown" },
    // prettier-ignore
    { id: "CustomerCode", value: "CustomerCode", type: 2, setting: "Dropdown" },
    { id: "Category", value: "Category", type: 2, setting: "Input" },
    { id: "Color", value: "Color", type: 2, setting: "Dropdown" },
    { id: "Size", value: "Size", type: 2, setting: "Dropdown" },
    // prettier-ignore
    { id: "TotalDiscAmount", value: "TotalDiscAmount", type: 3, setting: "Input" },
    { id: "Rate", value: "Rate", type: 3, setting: "Input" },
    { id: "Header ID", value: "Header ID", type: 1, setting: "Input" },
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

  const options = [
    { type: "ZoneName", id: "South", value: "South" },
    { type: "ZoneName", id: "West", value: "West" },
    { type: "ZoneName", id: "North", value: "North" },
    { type: "ZoneName", id: "East", value: "East" },

    { type: "State", id: "Tamil Nadu", value: "TamilNadu" },
    { type: "State", id: "Kerala", value: "Kerala" },
  ];

  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("loading");

  useEffect(() => {
    async function fetchData() {
      const response = await FetchData({
        endpoint: url + "create/fetch",
      });

      if (response.error === "no error") {
        setData(response.data);
        setMsg("done");
      }
    }

    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{ fields, operations, options, url, data, msg }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default AuthContextProvider;
