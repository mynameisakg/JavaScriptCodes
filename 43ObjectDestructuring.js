const band = {
    bandName : "queen",
    song : "Bohemian Rhapsody"
};

const bandname = band.bandName;
const songname = band.song;
console.log(bandname, songname);

const{bandName, song}=band; //in case of array destructuring we were writing the vaules directly, here we are providing the exact key name.
console.log(bandName);
console.log(song);
