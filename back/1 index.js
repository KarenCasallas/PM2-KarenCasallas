// levantar servidor
const app = require("./src/server");
const dbCon = require("./src/config/dbCon");

dbCon().then(
    (res) => {
    app.listen(3000, () => {
        console.log("App listen on port");
    });
})
.catch(err=>{
    console.log("Error al conectar BDD");
});

