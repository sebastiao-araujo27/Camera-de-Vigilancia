function init() {
    gapi.load('auth2', function() {
      gapi.auth2.init({
        client_id: '971850391752-61qvcge6g5f5hr8l52hlpvkvl2a0q9nc.apps.googleusercontent.com'
      });
    });
  }
  
  window.onload = init;
  
  function onSignIn(googleUser) {
    var user = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;
  
    // Aqui você pode usar os detalhes do usuário e o token de acesso para realizar ações, como acessar a API do Google Drive
  }
  
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log('Usuário desconectado');
    });
  }
  
  // Adicione o código relacionado ao controle da câmera e à funcionalidade aqui
  