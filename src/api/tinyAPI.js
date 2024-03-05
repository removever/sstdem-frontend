import axios from 'axios'
import config from './config'

const client = axios.create({
  baseURL: config.API_BASE_URL,
});

export const getTinys = async (data) => {
  try {
    const response = await client.post('/tiny/getTinys', data);

    return response.data;
  } catch (error) {
    console.error(error)
    throw error;
  }
};
