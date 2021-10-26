export default class AuthenticateService {
  constructor(httpClient, tokenStorage) {
    this.httpClient = httpClient;
    this.tokenStorage = tokenStorage;
  }

  async signUp(username, password, email, name) {
    const { data } = await this.httpClient.post('/user/signup', 
      {
        username: username,
        password: password,
        email: email,
        name: name,
      }
    );
    this.tokenStorage.saveToken(data.username, data.token)
    return data;
  }

  async login(username, password) {
    const { data } = await this.httpClient.post('/user/login', 
      { 
        username, 
        password 
      }
    );
    this.tokenStorage.saveToken(data.username, data.token); // get token -> promise
    return data;
  }
}