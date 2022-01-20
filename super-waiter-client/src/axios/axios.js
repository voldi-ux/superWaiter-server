import axios from 'axios';

export const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:4000" : "";

export const axiosGet = async url => {
  try {
    const resp = await axios.get(`${baseUrl}${url}`);
    return resp.data
  } catch (error) {
 console.log(error.message)
    return {err:'sometheng went wrong'}
  }
};

export const axiosPost = async (url, data) => {
  console.log(baseUrl)
  console.log(url);
  try {
    const resp = await axios.post(`${baseUrl}${url}`, data);
    console.log(resp.data)
    return resp.data;
  } catch (error) {
 console.log(error.message);

        return null
  }
};


