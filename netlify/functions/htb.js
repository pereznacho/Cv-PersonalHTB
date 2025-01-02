const axios = require('axios');

exports.handler = async function(event, context) {
  try {
    const response = await axios.get('https://www.hackthebox.com/api/v4/profile/activity/machines/123456', {
      headers: {
        'User-Agent': 'HTB API Client',
        'Authorization': `Bearer ${process.env.HTB_API_TOKEN}`
      }
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
      },
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }
};
