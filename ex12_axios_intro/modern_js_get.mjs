import axios from 'axios';


async function fetchData() {
  try {
    const response = await axios.get('https://reqres.in/api/users?page=2');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
