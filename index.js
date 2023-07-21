// ----------- Melihat database ---------------
show dbs;

// ----------- Membuat database ---------------
use modul3;

// ---------- Melihat Collection --------------
show collections;

// ----------- Songs Collection ---------------
db.songs.insertMany([
  {
    song: "Song 1",
    name: ["artis 1", "Artis 2"],
    album: "Album 1",
  },
  {
    song: "Song 2",
    name: ["artis 3", "Artis 4"],
    album: "Album 2",
  },
  {
    song: "Song 3",
    name: ["artis 5", "Artis 6"],
    album: "Album 3",
  },
  {
    song: "Song 4",
    name: ["artis 7", "Artis 8"],
    album: "Album 4",
  },
  {
    song: "Song 5",
    name: ["artis 9", "Artis 10"],
    album: "Album 5",
  },
  {
    song: "Song 6",
    name: ["artis 11", "Artis 12"],
    album: "Album 6",
  },
  {
    song: "Song 7",
    name: ["artis 13", "Artis 14"],
    album: "Album 7",
  },
  {
    song: "Song 8",
    name: ["artis 15", "Artis 16"],
    album: "Album 8",
  },
  {
    song: "Song 9",
    name: ["artis 17", "Artis 18"],
    album: "Album 9",
  },
]);

// menambah document dengan satu data
db.songs.insertOne({
  song: "Song 10",
  name: ["artis 19", "Artis 20"],
  album: "Album 10",
});



// ---------- Artists Collection --------------
db.artist.insertMany([
  {
    name: "artist 1",
    dateOfBirth: "1990",
    genres: ["hip hop", "clasic"],
  },
  {
    name: "artist 2",
    dateOfBirth: "1991",
    genres: ["blues", "clasic"],
  },
  {
    name: "artist 3",
    dateOfBirth: "1992",
    genres: ["hip hop", "jazz"],
  },
  {
    name: "artist 4",
    dateOfBirth: "1993",
    genres: ["pop", "hip hop"],
  },
  {
    name: "artist 5",
    dateOfBirth: "1994",
    genres: ["reggae", "rock"],
  },
  {
    name: "artist 6",
    dateOfBirth: "1995",
    genres: ["hip hop", "techno"],
  },
  {
    name: "artist 7",
    dateOfBirth: "1996",
    genres: ["jazz", "clasic"],
  },
  {
    name: "artist 8",
    dateOfBirth: "1997",
    genres: ["hip hop", "rock"],
  },
  {
    name: "artist 9",
    dateOfBirth: "1998",
    genres: ["pop", "blues"],
  },
  {
    name: "artist 10",
    dateOfBirth: "1999",
    genres: ["country", "clasic"],
  },
]);

// -------- Popular Songs Collection ----------
db.popularSongs.insertMany([
  {
    songTitle: "title 1",
    countPlay: 100,
    period: "2023-01",
  },
  {
    songTitle: "title 2",
    countPlay: 150,
    period: "2022-01",
  },
  {
    songTitle: "title 3",
    countPlay: 155,
    period: "2020-01",
  },
  {
    songTitle: "title 4",
    countPlay: 100,
    period: "2021-03",
  },
  {
    songTitle: "title 5",
    countPlay: 145,
    period: "2023-01",
  },
  {
    songTitle: "title 6",
    countPlay: 240,
    period: "2020-07",
  },
  {
    songTitle: "title 7",
    countPlay: 120,
    period: "2019-03",
  },
  {
    songTitle: "title 8",
    countPlay: 410,
    period: "2023-02",
  },
  {
    songTitle: "title 9",
    countPlay: 290,
    period: "2015-01",
  },
  {
    songTitle: "title 10",
    countPlay: 190,
    period: "2017-06",
  },
]);

// -------- Melihat jumlah Document di dalam Collection ----------
db.songs.aggregate([
  {
    $count: "total",
  },
]);
db.artist.aggregate([
  {
    $count: "total",
  },
]);
db.popularSongs.aggregate([
  {
    $count: "total",
  },
]);

// -------- Melihat satu dari isi Document ----------
db.songs.findOne();
db.artist.findOne();
db.popularSongs.findOne();

// -------- Melihat semua isi Document ----------
db.songs.find();
db.artist.find();
db.popularSongs.find();
// untuk merapikan tampilan document
db.songs.find().pretty();
db.artist.find().pretty();
db.popularSongs.find().pretty();


// -------- Update satu document -----------
db.songs.updateOne({album: "Album 1"}, {$set:{album: "Album 11"}})

// -------- Update beberapa document sesuai kondisi -----------
db.songs.updateMany({album: "Album 11"}, {$set:{album: "Album 1"}})


// ------- Menghapus Document ---------
db.songs.deleteMany({
    song: {
        $regex: "Song",
    },
});

//  Menghapus satu document
db.songs.deleteOne({_id: ObjectId("64b9ec9402c669f009687b97")})