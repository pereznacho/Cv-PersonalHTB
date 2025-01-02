import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Validación de las variables de entorno
const HTB_USER_ID = parseInt(process.env.HTB_USER_ID, 10);
const HTB_API_TOKEN = process.env.HTB_API_TOKEN;

if (!HTB_USER_ID || isNaN(HTB_USER_ID)) {
  console.error('Invalid HTB_USER_ID. It must be a valid integer.');
  throw new Error('HTB_USER_ID is missing or invalid. Please check your environment variables.');
}

if (!HTB_API_TOKEN) {
  console.error('HTB_API_TOKEN is missing.');
  throw new Error('HTB_API_TOKEN is required. Please check your environment variables.');
}

// Endpoint de la API
const HTB_API_URL = `https://www.hackthebox.com/api/v4/profile/activity/${HTB_USER_ID}`;

// Función Lambda de Netlify
export async function handler(event, context) {
  try {
    const response = await axios.get(HTB_API_URL, {
      headers: {
        Authorization: `Bearer ${HTB_API_TOKEN}`,
        Accept: 'application/json',
        'User-Agent': 'Portfolio-App',
      },
    });

    const machines = response.data.profile.activity
      .filter((activity) => activity.object_type === 'machine' && activity.type === 'root')
      .map((machine) => ({
        id: machine.id,
        name: machine.name,
        date: machine.date,
        machine_avatar: `https://labs.hackthebox.com${machine.machine_avatar}`,
      }));

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Permitir CORS
      },
      body: JSON.stringify({ machines }),
    };
  } catch (error) {
    console.error('Error fetching data from HackTheBox API:', error.message);
    console.error('Response:', error.response?.data);

    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Permitir CORS
      },
      body: JSON.stringify({
        error: 'Failed to fetch data from HackTheBox API',
        details: error.response?.data || error.message,
      }),
    };
  }
}