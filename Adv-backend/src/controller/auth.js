const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const CLIENT_ID =
  "869974891832-a3dcrgcsipqqka0njjmq3od57rmrbe3e.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

exports.signup = (req, res) => {
  User.findOne({
    email: req.body.email,
  }).exec(async (error, user) => {
    if (user)
      return res.status(400).json({
        error: "User already registered",
      });

    const { email, password, name, username } = req.body;

    const _user = new User({
      email,
      password,
      name,
      username,
    });

    _user.save((error, user) => {
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
        });
      }

      if (user) {
        const { email, password, name, username } = user;
        return res.status(201).json({
          user: {
            email,
            password,
            name,
            username,
          },
        });
      }
    });
  });
};

exports.googlelogin = (req, res) => {
  const { tokenId } = req.body;
  // token id is sent by fronted means (react)
  console.log(tokenId);
  //verify token id
  client
    .verifyIdToken({ idToken: tokenId, audience: CLIENT_ID })
    .then((response) => {
      //response get from api which is name and etc
      const { email_verified, name, email } = response.payload;
      //check if email is verified or not
      if (email_verified) {
        User.findOne({ email }).exec((err, user) => {
          if (user) {
            console.log(user)
            const token = jwt.sign({ _id: user._id }, "jayesh", {
              expiresIn: "7d",
            });
            const { _id, email, name,company_name
            } = user;
            //send response to client
            return res.json({
              token,
              user: { _id, email, name,company_name },
            });
          } else {
            // if user not exiist in db then save data in db
            let password = email + "jayesh";
            user = new User({ name, email, password }); //create user object with email
            user.save((err, save) => {
              if (err) {
                return (
                  res.status(400),
                  json({
                    error: "some thing went wrong",
                  })
                );
              } else {
                const token = jwt.sign({ _id: user._id,...User }, "jayesh", {
                  expiresIn: "7d",
                });

                const { _id, email
                } = user;
                return res.json({
                  token,
                  user: { _id, email},
                });
              }
            });
          }
        });
      }
    });
};

// enter other  information which require by cp

exports.inforegister = (req, res) => {
  const { token, user } = req.body;
  console.log(token._id, user);
  User.findByIdAndUpdate(
    token._id,
    { $set: user },
    { new: true },
    function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log("RESULT: " + result);
      return res.json({
        result
      });
    }
  );
};
