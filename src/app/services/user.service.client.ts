export class UserServiceClient {

  findUserById(userId) {
    return fetch('http://localhost:4000/api/user/' + userId)
      .then(response => response.json());
  }

  findUserByUsername(username) {
    const credentials = {
      username: username
    };
    return fetch('http://localhost:4000/api/register', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      }
    }) .then(response => response.json());
  }

  profile() {
    return fetch('http://localhost:4000/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }
  login(username, password) {
    const credentials = {
      username : username,
      password: password
    };
    return fetch('http://localhost:4000/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
    }
  logout() {
    return fetch('http://localhost:4000/api/logout', {
      method: 'post',
      credentials: 'include', // include, same-origin, *omit
    });
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('http://localhost:4000/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  update(_id, username, firstName, lastName, email) {
    const url = 'http://localhost:4000/api/profile';
    const user = {_id, username, firstName, lastName, email};
    return fetch(url, {
      method: 'put',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
