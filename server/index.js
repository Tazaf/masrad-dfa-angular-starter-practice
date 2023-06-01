const data = require("./data");
const express = require("express");
const { find, last, filter } = require("lodash");

const app = express();
const port = 4300;

let newMessageId = 60;

app.use(function (req, res, next) {
  var allowedOrigins = ["http://127.0.0.1:4200", "http://localhost:4200"];
  var origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  return next();
});

app.get("/dialogs", function (req, res) {
  res.json(
    data.map((item) => {
      return {
        id: item.id,
        contact: item.contact,
        lastMessage: last(item.messages),
        unreadMessages: filter(
          item.messages,
          (message) => message.read === false
        ).length,
      };
    })
  );
});

app.get("/dialogs/:id/messages", function (req, res) {
  const dialog = find(data, (item) => item.id == req.params.id);
  res.json(dialog.messages);
});

app.post("/dialogs/:id/messages", function ({ body }, res) {
  const { content } = body;
  if (content === null || content === undefined) {
    res.status(409);
  } else {
    res.json({
      id: getNewMessageId(),
      content,
      postedAt: new Date(),
      postedBy: "me",
      alignment: extractAlignment(body),
      read: false,
    });
  }
});

app.delete("/dialogs/:id/messages/:messageId", function (req, res) {
  res.status(201);
});

app.listen(port, function () {
  console.log(`DiaLog Server listening on port ${port}...`);
});

function getNewMessageId() {
  newMessageId += 1;
  return newMessageId;
}

const VALID_ALIGNMENTS = ["start", "center", "end"];

function extractAlignment({ alignment }) {
  if (isDefined(alignment) && VALID_ALIGNMENTS.includes(alignment)) {
    return alignment;
  } else {
    return "start";
  }
}

function isDefined(value) {
  return value !== null && value !== undefined;
}
