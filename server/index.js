const express = require("express");
require("dotenv").config();
const colors = require("colors");
const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");
const port = process.env.PORT || 5000;
const app = express();
const connectDB = require("./config/db");
connectDB();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  }),
);

app.listen(port, console.log(`server run ${port}`));
