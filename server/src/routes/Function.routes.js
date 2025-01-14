import routes from "./Secondary.routes.js";

const Routing = (app) =>{
app.use("/api", routes);
}

export default Routing;