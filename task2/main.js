const album = {
  artist: "The Clash",
  title: "The Clash",
  genre: "punk",
  year: 1977,
  tracklist: [
    { title: "Janie Jones", duration: "2:05" },
    { title: "Remote Control", duration: "3:00" },
    { title: "I'm So Bored With The U.S.A.", duration: "2:24" },
    { title: "White Riot", duration: "1:55" },
    { title: "Hate & War", duration: "2:05" },
    { title: "What's My Name", duration: "1:40" },
    { title: "Deny", duration: "3:03" },
    { title: "London's Burning", duration: "2:10" },
    { title: "Career Opportunities", duration: "1:51" },
    { title: "48 Hours", duration: "1:34" },
    { title: "Garageland", duration: "3:13" },
  ],
  credits: [
    {
      name: "Joe Strummer",
      instruments: ["Guitar", "Vocals"],
    },
    {
      name: "Mick Jones",
      instruments: ["Guitar", "Vocals"],
    },
    {
      name: "Paul Simonon",
      instruments: ["Bass Guitar"],
    },
    {
      name: "Tory Crimes",
      instruments: ["Drums"],
    },
  ],
};

/*
Task 1

Print the `title` and `duration` of the 6th song in the 
tracklist 
Expected output:
What's my name (1:40)
*/
if (album.tracklist.length >= 6) {
  const sixthSong = album.tracklist[5]; // Index 5 für den 6. Song
  console.log(`Title: ${sixthSong.title}, Duration: ${sixthSong.duration}`);
} else {
  console.log("The tracklist does not contain at least 6 songs.");
}

/*
Task 2

Looking at the `credits` property, print the name and instruments 
(separated by commas) of the first musician in the list.

Expected output:
Joe Strummer: Guitar, Vocals
*/
if (album.credits.length > 0) {
  const firstMusician = album.credits[0];
  const instruments = firstMusician.instruments.join(", ");
  console.log(`${firstMusician.name}: ${instruments}`);
} else {
  console.log("No musicians found in the credits.");
}
console.log("\nFirst musician:");


/*
Task 3

Using a loop, print all the track titles, numbering them 
starting from 1, like shown below

Expected output:

1. Janie Jones
2. Remote Control
3. I'm So Bored With The U.S.A.
4. White Riot
5. Hate & War
6. What's My Name
7. Deny
8. London's Burning
9. Career Opportunities
10. 48 Hours
11. Garageland
*/
for (let i = 0; i < album.tracklist.length; i++) {
  console.log(`${i + 1}. ${album.tracklist[i].title}`);
}
console.log("\nTracklist:");

/*
Task 4

Using the `credits` property in the object, print each band 
component together with the instruments they play.

Expected output:

Joe Strummer: Guitar, Vocals
Mick Jones: Guitar, Vocals
Paul Simonon: Bass Guitar
Tory Crimes: Drums
*/
album.credits.forEach(member => {
  const instruments = member.instruments.join(", ");
  console.log(`${member.name}: ${instruments}`);
});
console.log("\nBand members:");