const netflix = require("./functions/netflix");

const app = async () => {
  const list = ["81056766"];

  let result = [];

  for (const id of list) {
    const doc = await netflix.getTitleById(id);
    result.push(doc);
  }

  console.log(result);
};

app();
