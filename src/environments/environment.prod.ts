export const environment = {
  production: true
};

export const SpotifyConfiguration = {
  clientId: 'fc5559a518ee4b69ae61d1107077f2c7',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    "user-read-currently-playing", // musica tocando agora.
    "user-read-recently-played", // ler musicas tocadas recentemente
    "user-read-playback-state", // ler estado do player do usuario
    "user-top-read", // top artistas e musicas do usuario
    "user-modify-playback-state", // alterar do player do usuario.
    "user-library-read", // ler biblioteca dos usuarios
    "playlist-read-private", // ler playlists privads
    "playlist-read-collaborative" // ler playlists colaborativas
  ]
}