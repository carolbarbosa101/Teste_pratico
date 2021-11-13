import { createServer } from 'miragejs'

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<User>({})
    },
    routes(){
      this.namespace = 'api';
      this.timing = 750;

      this.get('/User');
      this.post('/users');

      this.namespace = '';
    }
  })

  return server;
}

// CRUD