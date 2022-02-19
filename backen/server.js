const app = require("./app");

const connect = require("./configs/db");

// app.listen(2466,  function () {
//      connect();
//     console.log("Listening on port 2466");
//   });

app.listen(2345, () => {
    console.log("Hey app is listening");
});