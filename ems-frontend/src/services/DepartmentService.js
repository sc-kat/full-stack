import axios from "axios";

const DEPT_REST_API_BASE_URL = "http://localhost:8080/api/departments";

export const getAllDepartments = () => axios.get(DEPT_REST_API_BASE_URL);

export const addDepartment = (deparment) => axios.post(DEPT_REST_API_BASE_URL, deparment);