const config = {
    'db': 'postgresql',
    'host': 'acme-ind.com',
    'password': 'fake-password',
    'port': 512,
    'admin': {
      'name': 'Tapas',
      'rights': ['create', 'update', 'delete']
    }
  }

  Object.freeze(config);

  config.admin.rights.push('namratha');

  console.log(config);