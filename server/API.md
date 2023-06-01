# DiaLog API

## Base URL

When the backend runs, the API is exposed at:

```
http://localhost:4300
```

## Routes

### Retrieve all DiaLogs

To retrieve all the DiaLogs, make a `GET` request to `/dialogs`.

This will return an array of DiaLog objects.

### Retrieve all messages for a DiaLog

To retrieve the complete list of messages for a specific DiaLog, make a `GET` request to `/dialogs/[id]/messages` (with `[id]` being replaced by the DiaLog id).

This will return an array of Message objects.

### "Create" a new message

To fake the creation of a new message, send a `POST` request to `/dialogs/[id]/messages` (with `[id]` being replaced by the DiaLog id) and a JSON body containing:

```json
{
  "content": "<The content of the new message>",
  "alignment": "<An optional value of 'start', 'center', or 'end' for the message alignment>"
}
```

### "Delete" a message

To fake the deletion of a new message, send a `DELETE` request to `/dialogs/[id]/messages/[messageId]` (with `[id]` being replaced by the DiaLog id, and `[messageId]` being the id of the message to delete).

## Models

### DiaLog

Here's the properties of a DiaLog object:

| name             | type                | description                        |
| :--------------- | :------------------ | :--------------------------------- |
| `id`             | number              | The id of the Dialog               |
| `contact`        | string              | The name of the contact            |
| `lastMessage`    | [Message](#message) | The last message in the discussion |
| `unreadMessages` | number              | The number of unread messages      |

### Message

Here's the properties of a Message object:

| name        | type    | description                                                                         |
| :---------- | :------ | :---------------------------------------------------------------------------------- |
| `id`        | number  | The id of the Message                                                               |
| `content`   | string  | The actual content of the message                                                   |
| `postedAt`  | Date    | The date at which the message has been sent                                         |
| `postedBy`  | string  | Indicates if the message has been sent by the user ('me') or their contact ('them') |
| `alignment` | string  | The alignment of the message. Can be either: 'start', 'center' or 'end'             |
| `read`      | boolean | Indicates wether the user has read this message                                     |
