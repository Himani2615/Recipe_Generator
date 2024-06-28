exports.handler = async function(event, context) {
  const API_ID = process.env.API_ID;
  const API_KEY = process.env.API_KEY;

  return {
    statusCode: 200,
    body: JSON.stringify({ apiId: API_ID, apiKey: API_KEY })
  };
};
