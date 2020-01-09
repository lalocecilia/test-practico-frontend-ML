export const fetchGetSearch = (query) => {
  const options = {
    method: 'GET',
    dataType: 'json',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin'
  };

  return fetch('/api/items?q=' + query, options)
    .then(response => response.json())
    .then(response => ({ response }))
    .catch(error => ({ error }));
};

export const fetchGetDetail = (id) => {
  const options = {
    method: 'GET',
    dataType: 'json',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin'
  };

  return fetch('/api/items/' + id, options)
    .then(response => response.json())
    .then(response => ({ response }))
    .catch(error => ({ error }));
};
