````markdown
# Apiwap-node

apiwap-npde is a Node.js package that provides a simple and easy-to-use interface for sending WhatsApp messages using the [APIWAP](https://apiwap.com) service.

## Installation

You can install Apiwap via npm:

```bash
npm install apiwap-node
```

## Getting Started

To use Apiwap, you'll need an API key from APIWAP. If you don't have one yet, you can sign up for an account at [APIWAP](https://apiwap.com).

```javascript
import Apiwap from "apiwap-node";

// Initialize Apiwap with your API key
const apiwap = new Apiwap("YOUR_API_KEY");

// Send a text message
apiwap.sendTextMessage({
  to: "RECIPIENT_NUMBER",
  message: "Hello, world!"
})
  .then(response => {
    console.log("Message sent successfully:", response.data);
  })
  .catch(error => {
    console.error("Failed to send message:", error.message);
  });

// Send a media message
apiwap.sendMedia({
  to: "RECIPIENT_NUMBER",
  mediaUrl: "URL_TO_MEDIA_FILE"
})
  .then(response => {
    console.log("Media message sent successfully:", response.data);
  })
  .catch(error => {
    console.error("Failed to send media message:", error.message);
  });
```

## API

### `new Apiwap(apikey: string)`

Creates a new instance of Apiwap with the provided API key.

- `apikey`: Your API key obtained from APIWAP.

### `sendTextMessage(body: SendTextMessageBody): Promise<any>`

Sends a text message.

- `body`: An object containing the message details.
  - `to`: The recipient's phone number.
  - `message`: The text message to be sent.

### `sendMedia(body: SendMediaMessageBody): Promise<any>`

Sends a media message.

- `body`: An object containing the media message details.
  - `to`: The recipient's phone number.
  - `mediaUrl`: The URL of the media file to be sent.

## Error Handling

Apiwap methods return promises. If an error occurs during the API call, it will be caught and propagated as a rejected promise. You can handle errors using `.catch()`.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
