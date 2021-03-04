import axios from "axios";
const request = async ({ route, method, payload, params }) => {
  // const myToken = JSON.parse(localStorage.getItem("__admin_token__"));
  console.log(route, payload);
  const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTYxMzYyODY5MywiZXhwIjoxNjE0NDkyNjkzfQ.wSQ1M7eQKvDRcsUfAZODgntnC21rGmtlMDELUi8euzk`;
  method = method;
  const headers = {
    Accept: "application/json",
    Authorization: token,
  };
  return axios({
    data: payload,
    url: `https://melanatedmonarchy.com/${route}`,
    method,
    headers,
    params,
  });
};

export default request;
