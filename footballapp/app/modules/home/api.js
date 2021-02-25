export function getEvent(callback) {
    fetch('https://spreenapp.com/api/events', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => callback(response.data))
      .catch(error => callback(false, null, error.json()));
  }