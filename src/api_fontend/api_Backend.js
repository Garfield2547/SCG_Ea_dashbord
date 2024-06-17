import axios from 'axios';
const backendURL = 'http://localhost/scgta/src/data/dataq.php';
export const fetchDataFromBackend = async () => {
    try {
      const response = await axios.get(`${backendURL}`);
      return response.data.Data_Model;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      throw error;
    }
  };