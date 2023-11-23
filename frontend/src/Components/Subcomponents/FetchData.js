// import FormData from "form-data";

const FetchData = async ({ endpoint, data }) => {
  const response = await fetch(endpoint, {
    method: "post",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: data }),
  });
  const json = await response.json();
  return json;
};

export { FetchData };
