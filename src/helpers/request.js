async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const body = await response.text();
  const error = new Error(body);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

export default (url, params = {}) => {
  const formattedParams = {
    ...params,
    headers: {
      authorization: localStorage.getItem('token'),
    },
    body: params.body ? JSON.stringify(params.body) : null,
  };
  return fetch(process.env.REACT_APP_SERVER_URL + url, formattedParams)
    .then(checkStatus)
    .then(parseJSON);
};
