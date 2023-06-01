const { DateTime } = require("luxon");

module.exports = [
  {
    id: 1,
    contact: "James Doohan",
    messages: [
      {
        id: 11,
        content: "Hey!",
        postedAt: DateTime.fromObject({ hour: 18, minute: 30 })
          .minus({ day: 1 })
          .toJSDate(),
        postedBy: "them",
        alignment: "left",
        read: false,
      },
      {
        id: 12,
        content: "There's an API to get random Chuck Norris jokes!",
        postedAt: DateTime.fromObject({ hour: 18, minute: 30 })
          .minus({ day: 1 })
          .toJSDate(),
        postedBy: "them",
        alignment: "left",
        read: false,
      },
      {
        id: 13,
        content: "https://api.chucknorris.io/jokes/random\nYou knew?",
        postedAt: DateTime.fromObject({ hour: 18, minute: 31 })
          .minus({ day: 1 })
          .toJSDate(),
        postedBy: "them",
        alignment: "left",
        read: false,
      },
      {
        id: 14,
        content: "Wait, I'll get you one...",
        postedAt: DateTime.fromObject({ hour: 18, minute: 31 })
          .minus({ day: 1 })
          .toJSDate(),
        postedBy: "them",
        alignment: "left",
        read: false,
      },
      {
        id: 15,
        content: '"Chuck Norris can SEE invisible tape"',
        postedAt: DateTime.fromObject({ hour: 18, minute: 32 })
          .minus({ day: 1 })
          .toJSDate(),
        postedBy: "them",
        alignment: "left",
        read: false,
      },
      {
        id: 16,
        content: "lmao XD",
        postedAt: DateTime.fromObject({ hour: 18, minute: 32 })
          .minus({ day: 1 })
          .toJSDate(),
        postedBy: "them",
        alignment: "left",
        read: false,
      },
    ],
  },
  {
    id: 2,
    contact: "Ken Bogard",
    messages: [
      {
        id: 21,
        content: "Hi there!",
        postedAt: DateTime.fromObject({ hour: 12, minute: 57 }).toJSDate(),
        postedBy: "them",
        alignment: "left",
        read: true,
      },
      {
        id: 22,
        content: "Hey, hello you! What's up?",
        postedAt: DateTime.fromObject({ hour: 13, minute: 5 }).toJSDate(),
        postedBy: "me",
        alignment: "left",
        read: true,
      },
      {
        id: 23,
        content: "Same old, same old. Wanna come'n play some SFV?!",
        postedAt: DateTime.fromObject({ hour: 13, minute: 16 }).toJSDate(),
        postedBy: "them",
        alignment: "left",
        read: true,
      },
    ],
  },
  {
    id: 3,
    contact: "Dad",
    messages: [
      {
        id: 31,
        content: "You're late!",
        postedAt: DateTime.fromObject({ hour: 19, minute: 33 })
          .minus({ day: 1 })
          .toJSDate(),
        postedBy: "them",
        alignment: "left",
        read: false,
      },
    ],
  },
  {
    id: 4,
    contact: "Levar Burton",
    messages: [
      {
        id: 41,
        content: "Dude! Logan's awesome!",
        postedAt: DateTime.fromObject({ hour: 7, minute: 12 }).toJSDate(),
        postedBy: "them",
        alignment: "left",
        read: false,
      },
    ],
  },
  {
    id: 5,
    contact: "Tasha Yar",
    messages: [
      {
        id: 51,
        content: "See you on the other side",
        postedAt: DateTime.fromObject({ hour: 21, minute: 41 })
          .minus({ day: 1 })
          .toJSDate(),
        postedBy: "them",
        alignment: "left",
        read: false,
      },
    ],
  },
];
