import axios from "axios";

const DEPT_REST_API_BASE_URL = "http://localhost:8080/api/departments";

export const listOfDepartments = () => axios.get(DEPT_REST_API_BASE_URL);

export const addDepartment = (department) =>
    axios.post(DEPT_REST_API_BASE_URL, department);

export const getDepartmentByID = (id) =>
    axios.get(DEPT_REST_API_BASE_URL + "/" + id);

export const updateDepartment = (id, department) =>
    axios.put(DEPT_REST_API_BASE_URL + "/" + id, department);

export const deleteDepartment = (id) => axios.delete(DEPT_REST_API_BASE_URL + '/' + id);
