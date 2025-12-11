import axios from "axios";
import { BASE_URL } from "./config";

export const getDoctors = async () => {
  const { data } = await axios.get(`${BASE_URL}/doctor/find-all`);
  return data;
};

export const deleteDoctor = async (id) => {
  const { data } = await axios.delete(`${BASE_URL}/doctor/delete/${id}`);
  return data;
};

export const createDoctor = async (doctor) => {
  const { data } = await axios.post(`${BASE_URL}/doctor/save`, doctor);
  return data;
};

export const updateDoctorFunction = async (doctor) => {
  const { data } = await axios.put(
    `${BASE_URL}/doctor/update/${doctor.id}`,
    doctor
  );
  return data;
};
