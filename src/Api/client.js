import { create } from "apisauce";

const api = create({
  baseURL: "http://mobileapp.kalyaniaura.com/api",
  Accept: "application/json",
});

export default api;
