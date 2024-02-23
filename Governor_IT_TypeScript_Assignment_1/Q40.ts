interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

const album1 = makeAlbum("Artist1", "AlbumTitle1");
const album2 = makeAlbum("Artist2", "AlbumTitle2", 12);
const album3 = makeAlbum("Artist3", "AlbumTitle3");

console.log(album1);
console.log(album2);
console.log(album3);