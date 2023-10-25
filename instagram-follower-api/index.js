// require("dotenv").config();
// const { IgApiClient } = require("instagram-private-api");
// const pgp = require("pg-promise")();
// const db = pgp("postgres://postgres:Cucitrice2.0@localhost:5432/instagram");
// const readline = require("readline");
//
// const ig = new IgApiClient();
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
//
// const logOnInstagram = async () => {
//   ig.state.generateDevice(process.env.IG_USERNAME);
//   return await ig.account
//     .login(process.env.IG_USERNAME, process.env.IG_PASSWORD)
//     .catch(async (error) => {
//       if (
//         error.response &&
//         error.response.body &&
//         error.response.body.error_type
//       ) {
//         let error_type = error.response.body.error_type;
//         switch (error_type) {
//           case "checkpoint_challenge_required":
//             await ig.challenge.auto(true);
//             break;
//         }
//       }
//     });
// };
//
// const getFollowers = async (loggedUser) => {
//   const id = await ig.user.getIdByUsername(loggedUser.username);
//   const followers = []; //mi seguono;
//   const following = []; //seguo io;
//   const followersFeed = ig.feed.accountFollowers(id);
//   const followingFeed = ig.feed.accountFollowing(id);
//   const extractFollowers = (push1, push2) => {
//     Promise.all([followersFeed.items(), followingFeed.items()]).then(
//       (items) => {
//         if (push1) {
//           followers.push(...items[0]);
//         }
//         if (push2) {
//           following.push(...items[1]);
//         }
//         const isMore1 = followersFeed.isMoreAvailable() && push1;
//         const isMore2 = followingFeed.isMoreAvailable() && push2;
//         if (isMore1 && isMore2) {
//           setTimeout(() => {
//             extractFollowers(true, true);
//           }, 5000);
//         } else if (isMore1 && !isMore2) {
//           setTimeout(() => {
//             extractFollowers(true, false);
//           }, 5000);
//         } else if (!isMore1 && isMore2) {
//           setTimeout(() => {
//             extractFollowers(false, true);
//           }, 5000);
//         } else {
//           console.log("Utenti che ti seguono: " + followers.length);
//           console.log("Utenti che segui: " + following.length);
//           const unFollow = following.filter(
//             (follow) =>
//               !followers.find((fol) => fol.username === follow.username)
//           );
//           console.log(
//             "Utenti che segui ma che non ti seguono: " + unFollow.length
//           );
//           console.log(unFollow.map((fol) => fol.username));
//           rl.question(
//             "Vuoi vedere il nome e l'url dell'immagine di profilo delle persone che non segui? ",
//             (answer) => {
//               if (answer.toLowerCase() === "si") {
//                 const iDontFollow = followers
//                   .filter(
//                     (fol) =>
//                       fol.is_private &&
//                       !following
//                         .map((fol) => fol.username)
//                         .includes(fol.username)
//                   )
//                   .map((fol) => ({
//                     username: fol.username,
//                     image: fol.profile_pic_url,
//                   }));
//                 console.log(iDontFollow);
//               } else if (answer.toLowerCase() === "no") {
//                 console.log("A presto");
//               } else {
//                 console.log(
//                   'Risposta non valida. Per favore, rispondi con "si" o "no".'
//                 );
//               }
//               getFollowersFromDb()
//                 .then((followersDb) => {
//                   let leaveFollow = [];
//                   if (followersDb.length) {
//                     leaveFollow = followersDb.filter(
//                       (follower) =>
//                         !followers.find(
//                           (fol) => fol.username === follower.username
//                         )
//                     );
//                     if (leaveFollow.length) {
//                       console.log(
//                         "Utenti che ti hanno unfollowato: ",
//                         leaveFollow
//                       );
//                     }
//                   }
//                   if (
//                     followers.length !== followersDb.length ||
//                     leaveFollow.length
//                   ) {
//                     insertFollowersOnDb(followers, leaveFollow).catch((e) =>
//                       console.error(e)
//                     );
//                   }
//                 })
//                 .catch((e) => console.error(e));
//             }
//           );
//         }
//       }
//     );
//   };
//   extractFollowers(true, true);
// };
//
// const insertFollowersOnDb = async (followers, leaveFollow) => {
//   const followersDb = followers.map((follower) => ({
//     pk: follower.pk,
//     full_name: follower.full_name,
//     username: follower.username,
//     profile_pic_url: follower.profile_pic_url,
//   }));
//   const unfollowersDb = leaveFollow.map((follower) => ({
//     pk: follower.pk,
//     full_name: follower.full_name,
//     username: follower.username,
//     profile_pic_url: follower.profile_pic_url,
//   }));
//   try {
//     const cs = new pgp.helpers.ColumnSet(
//       ["pk", "full_name", "username", "profile_pic_url"],
//       { table: "follower" }
//     );
//     const csu = new pgp.helpers.ColumnSet(
//       ["pk", "full_name", "username", "profile_pic_url"],
//       { table: "unfollower" }
//     );
//     const query = pgp.helpers.insert(followersDb, cs);
//
//     await db.none(query);
//
//     if (unfollowersDb.length) {
//       const queryUn = pgp.helpers.insert(unfollowersDb, csu);
//
//       await db.none(queryUn);
//     }
//     console.log("Dati inseriti sul DB con successo");
//   } catch (error) {
//     console.error("Errore durante il l'inserimento dei dati:", error);
//   }
// };
//
// const getFollowersFromDb = async () => {
//   try {
//     return await db.any("SELECT * from follower");
//   } catch (error) {
//     console.error("Errore durante il recupero dei dati:", error);
//     return [];
//   }
// };
//
// logOnInstagram().then((loggedUser) => {
//   getFollowers(loggedUser).catch((e) => console.error(e));
// });
const express = require("express");
const path = require("path");
const { IgApiClient } = require("instagram-private-api");
const cors = require("cors");
const request = require("request");

const app = express();
const port = 3000;
let ig = new IgApiClient();

const corsOptions = {
  origin: "http://localhost:5400",
  methods: "GET,PUT,POST,DELETE",
};

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors(corsOptions));

app.post("/login", async (req, res) => {
  const logOnInstagram = async (username, password) => {
    ig.state.generateDevice(username);
    return await ig.account.login(username, password).catch(async (error) => {
      if (
        error.response &&
        error.response.body &&
        error.response.body.error_type
      ) {
        let error_type = error.response.body.error_type;
        switch (error_type) {
          case "checkpoint_challenge_required":
            await ig.challenge.auto(true);
            break;
        }
      }
    });
  };

  const { username, password } = req.body;
  try {
    const loginResult = await logOnInstagram(username, password);
    res.status(200).json(loginResult);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/proxy-image", (req, res) => {
  const imageUrl = req.query.imageUrl;
  request(imageUrl).pipe(res);
});

app.get("/infos", async (req, res) => {
  const username = req.query.username;
  try {
    const id = await ig.user.getIdByUsername(username);
    const followers = []; //mi seguono;
    const following = []; //seguo io;
    const followersFeed = ig.feed.accountFollowers(id);
    const followingFeed = ig.feed.accountFollowing(id);
    const extractFollowers = (push1, push2) => {
      Promise.all([followersFeed.items(), followingFeed.items()])
        .then((items) => {
          if (push1) {
            followers.push(...items[0]);
          }
          if (push2) {
            following.push(...items[1]);
          }
          const isMore1 = followersFeed.isMoreAvailable() && push1;
          const isMore2 = followingFeed.isMoreAvailable() && push2;
          if (isMore1 && isMore2) {
            setTimeout(() => {
              extractFollowers(true, true);
            }, 5000);
          } else if (isMore1 && !isMore2) {
            setTimeout(() => {
              extractFollowers(true, false);
            }, 5000);
          } else if (!isMore1 && isMore2) {
            setTimeout(() => {
              extractFollowers(false, true);
            }, 5000);
          } else {
            res.status(200).json({
              followers: followers,
              following: following,
            });
          }
        })
        .catch((e) => {
          console.error(e);
          res.status(e.response.statusCode).json({ error: e.message });
        });
    };
    extractFollowers(true, true);
  } catch (e) {
    console.error(e);
    res.status(e.response.statusCode).json({ error: e.message });
  }
});

app.get("/unfollow-user", async (req, res) => {
  const pk = req.query.pk;
  return await ig.friendship
    .destroy(pk)
    .then(() =>
      res
        .status(200)
        .json({ message: "Persona smessa di seguire con successo" })
    )
    .catch((e) => res.status(e.response.statusCode).json({ error: e.message }));
});

app.get("/follow-user", async (req, res) => {
  const pk = req.query.pk;
  return await ig.friendship
    .create(pk)
    .then(() =>
      res.status(200).json({ message: "Utente seguito con successo" })
    )
    .catch((e) => res.status(e.response.statusCode).json({ error: e.message }));
});

app.get("/logout", async (req, res) => {
  return await ig.account
    .logout()
    .then(() => {
      ig = new IgApiClient();
      return res.status(200).json({ message: "Logout avvenuto con successo" });
    })
    .catch((e) => res.status(e.response.statusCode).json({ error: e.message }));
});

app.get("/stories", async (req, res) => {
  const pk = req.query.pk;
  const reelsFeed = ig.feed.reelsMedia({
    userIds: [pk],
  });
  try {
    const storyItems = await reelsFeed.items();
    return res.status(200).json(storyItems);
  } catch (e) {
    return res.status(e.response.statusCode).json({ error: e.message });
  }
});

app.get("/user", async (req, res) => {
  const pk = req.query.pk;
  try {
    const user = await ig.user.info(pk);
    return res.status(200).json(user);
  } catch (e) {
    return res.status(e.response.statusCode).json({ error: e.message });
  }
});

app.get("/search", async (req, res) => {
  const value = req.query.value;
  try {
    const results = await ig.user.search(value);
    return res.status(200).json(results);
  } catch (e) {
    return res.status(e.response.statusCode).json({ error: e.message });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
