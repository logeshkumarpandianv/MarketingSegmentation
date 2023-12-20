require("dotenv").config();
// const RubensProductSchema2 = require("../models/productModels.js")
const path = require("path");
var fs = require("fs");
const { Storage } = require("@google-cloud/storage");
const db = require("../db.js");

const Check = async (req, res) => {
  const data = req.body;
  const query = data.data;

  const unix = parseInt((new Date().getTime() / 1000).toFixed(0));

  try {
    const result = await db.query(
      "INSERT INTO query_status (id, query_data, query_name, status) VALUES ($1, $2, $3, $4)",
      [unix, query.query, query.name, "pending"]
    );

    if (result.rowCount === 1) {
      res
        .status(200)
        .json({ error: "no error", message: "Query Added Successfully" });
    } else {
      res.status(200).json({ error: "error", message: "Something went wrong" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const Fetch = async (req, res) => {
  try {
    const result = await db.query("select * from query_status");

    const data = result.rows;
    // console.log(result.rows);

    // if (data.length > 0) {
    res.status(200).json({
      error: "no error",
      data: data,
      message: "Fetched Successfully",
    });
    // } else {
    //   res.status(200).json({ error: "error", message: "Something went wrong" });
    // }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const Label = async (req, res) => {
  try {
    const result = await db.query("select * from master_ui");

    // console.log(result.rows);
    const data = result.rows;

    if (data.length > 0) {
      res.status(200).json({
        error: "no error",
        data: data,
        message: "Fetched Successfully",
      });
    } else {
      res.status(200).json({ error: "error", message: "Something went wrong" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  Check,
  Fetch,
  Label,
};
