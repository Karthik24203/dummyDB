const axios = require("axios");

axios
  .get(
    "https://dummy-db-kfi8.vercel.app/api/non_user?inputValue[]=hh&inputValue[]=nnn&types[]=date&types[]=location&subtypes[]=weekday&subtypes[]=city&limit=8"
  )
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));
