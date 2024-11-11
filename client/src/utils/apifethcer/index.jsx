import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchData = async (
  endpoint,
  method = "GET",
  payload = null,
  params = {}
) => {
  try {
    const response = await api({
      url: endpoint,
      method,
      payload,
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
