module.exports = function(app) {
  var home = app.controllers.home;
  app.get('/', home.index); // rota para abrir o index na home
  app.post('/entrar', home.login); //rota de login
  app.get('/sair', home.logout); //rota de logout
};
