import axios from "axios";
const JSON_PLACEHOLDER_BASE_URL =
  'https://64cab3a9700d50e3c7053592.mockapi.io/contacts/contacts';

export const fetchContacts = async () => {
  const { data } = await axios.get(`${JSON_PLACEHOLDER_BASE_URL}`);
  return data;
};
export const addContact = async newData => {
  const {data} = await axios.post(`${JSON_PLACEHOLDER_BASE_URL}`, newData);
  return data;
};
export const deleteContact = async contactId => {
  const { data } = await axios.delete(`${JSON_PLACEHOLDER_BASE_URL}/${contactId}`);
  return data;
};