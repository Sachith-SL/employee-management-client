import axios from "axios";

const BASE_URL = "http://localhost:8087/v1/employees";
// import.meta.env.VITE_BASE_URL;

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const create = async (data: any) => {
  try {
    const response = await axiosInstance.post("", data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getAllEmployees = async () => {
  try {
    const response = await axiosInstance.get("");
    console.log(response.data.employeeList);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getEmployeeById = async (id: any) => {
  try {
    const response = await axiosInstance.get(`/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const updateEmployee = async (id: any, data: any) => {
  try {
    const response = await axiosInstance.put(`/${id}`, data);
    alert("Employee updated successfully");
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const deleteEmployee = async (id: any) => {
  try {
    const response = await axiosInstance.delete(`/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
