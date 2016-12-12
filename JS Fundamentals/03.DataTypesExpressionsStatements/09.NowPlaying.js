function formatNowPlaying([title, artist, duration]) {

    //Write a JS function that displays information about the currently playing musical track

    return `Now Playing: ${artist} - ${title} [${duration}]`;
}

console.log(formatNowPlaying(['Number One', 'Nelly', '4:09'])); // Now Playing: Nelly – Number One [4:09]