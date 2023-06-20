## Development vs. Production

- Development: coding. This is where you write your code.
- Node.js server + React server

- Production: deployment. This is where you deploy your code.
- Node.js server + React static react files

## ORM - Object Relational Mapping

ORM: Object Relational Mapping, is a technique that allows us to send queries to a database in an easier way

## Mongoose

```js
const mongoose = require("mongoose");

// schema: blueprint for the data
const userSchema = new mongoose.Schema(
  {
    // property
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
    },
  },
  {
    collection: "user-data",
  }
);

// model: a class with which we construct documents
const model = mongoose.model("UserModel", userSchema);

module.exports = model;
```

### JWT - JSON Web Token

- Authentication: it is the process of verifying who a user is. It's like logging in with a username and password.

- Authorization: it is the process of verifying what they have access to. It's like checking if a user is an admin or not.

- The client wants to access a protected route on the server, but the server wants the client to authenticate itself before it can access the route.

- Server generates a JWT which contains a secret key and sends it to the client.

- Clients cannot be trusted, so the JWT is signed with a secret key. This means that the server can verify if the JWT is valid.
