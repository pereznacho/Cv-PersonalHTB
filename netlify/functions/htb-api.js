const axios = require('axios');
require('dotenv').config();

exports.handler = async function (event, context) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
      body: '',
    };
  }

  const HTB_USER_ID = process.env.HTB_USER_ID;
  const HTB_API_TOKEN = process.env.HTB_API_TOKEN;

  if (!HTB_USER_ID || !HTB_API_TOKEN) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: 'HTB_USER_ID or HTB_API_TOKEN is missing.',
      }),
    };
  }

  try {
    const response = await axios.get(
      `https://www.hackthebox.com/api/v4/profile/activity/${HTB_USER_ID}`,
      {
        headers: {
          Authorization: `Bearer ${HTB_API_TOKEN}`,
          Accept: 'application/json',
        },
      }
    );

    if (!response.data?.profile?.activity) {
      throw new Error('Unexpected response format from Hack The Box API');
    }

    const machines = response.data.profile.activity
      .filter(
        (activity) =>
          activity.object_type === 'machine' && activity.type === 'root'
      )
      .map((machine) => ({
        id: machine.id,
        name: machine.name,
        date: machine.date,
        machine_avatar: `https://labs.hackthebox.com${machine.machine_avatar}`,
      }));

    return {
    statusCode: 200,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ machines })
    };
  } catch (error) {
    console.error('Error in backend:', error.message);
    return {
      statusCode: error.response?.status || 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: 'Failed to fetch data from Hack The Box API',
        details: error.response?.data || error.message,
      }),
    };
  }
};