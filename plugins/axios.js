export default function ({ $axios, $config, app }, inject) {
  // At this point app.$auth is undefined. (Unless you use setTimeout but that is not a solution)

  // Create axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'application/json', // accept json
      },
      'content-type': 'application/json',
    },
    baseURL: $config.baseURL,
  });
  api.onRequest(() => {
    if (app.$auth.loggedIn) {
      const token = app.$auth.strategy.token.get().split(' ')[1];
      api.setToken(token, 'Bearer');
    }
  });

  // Inject to context as $api
  inject('api', api);
}
