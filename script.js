// script.js

// Array com as informações das fotos e músicas do Spotify
// script.js

// Array com as informações das fotos e músicas do Spotify
const photos = [
    {
        src: 'img/foto1.jpg',
        spotifyId: 'spotify:track:1CIBdrHwib4ZEDS2x0gU4U'
    },
    {
        src: 'img/foto2.jpg',
        spotifyId: 'spotify:track:6aENzUj0YaGwln4AmsK3nb'
    },
    {
        src: 'img/foto3.jpg',
        spotifyId: 'spotify:track:2bVt8bpiSBQn6HMizoRX4k'
    },
    {
        src: 'img/foto4.jpg',
        spotifyId: 'spotify:track:3OEpBUS6JQBdfpkm8bul5f'
    },
    {
        src: 'img/foto5.jpg',
        spotifyId: 'spotify:track:52yEAOTPaQzW5vcqFKu6Du'
    }
];

// Restante do código JavaScript permanece o mesmo...


let currentIndex = 0;
const photoElement = document.getElementById('photo');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Função para atualizar a foto e reproduzir a música do Spotify
function updatePhotoAndMusic() {
    const photoInfo = photos[currentIndex];
    photoElement.src = photoInfo.src;

    // Inicia a reprodução da música no Spotify
    playSpotifyTrack(photoInfo.spotifyId);
}

// Função para avançar para a próxima foto
function nextPhoto() {
    currentIndex = (currentIndex + 1) % photos.length;
    updatePhotoAndMusic();
}

// Função para voltar para a foto anterior
function prevPhoto() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updatePhotoAndMusic();
}

// Função para reproduzir uma faixa do Spotify
function playSpotifyTrack(spotifyTrackId) {
    // Substitua 'YOUR_ACCESS_TOKEN' pelo access token obtido
    const accessToken = 'BQDSGLINh2PbGRVk3Te3H4EcTEHHs5YgqcST41wMMvahtspu9Kb_v7yvvJI8_whxpyvui1Cg_8w7FD0HoI4qDyt_pz_C2yab5DBC683KQwnmuy_trmk';

    // Endpoint da Web API do Spotify para reproduzir uma faixa
    const url = `https://api.spotify.com/v1/me/player/play`;

    fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uris: [spotifyTrackId],
        }),
    })
    .then(response => {
        if (response.ok) {
            console.log(`Música ${spotifyTrackId} reproduzida com sucesso.`);
        } else {
            console.error('Erro ao reproduzir música:', response.status, response.statusText);
        }
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });
}

// Event listeners para os botões de controle
nextButton.addEventListener('click', nextPhoto);
prevButton.addEventListener('click', prevPhoto);

// Chamada inicial para carregar a primeira foto e música
updatePhotoAndMusic();





