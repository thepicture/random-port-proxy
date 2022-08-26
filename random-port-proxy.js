const settings = require("./settings");

const port = Math.floor(
  Math.random() * (settings.ports.max - settings.ports.min + 1) +
    settings.ports.min
);

const proxy = `${settings.protocol}://${encodeURIComponent(
  settings.credentials.username
)}:${encodeURIComponent(settings.credentials.password)}@${
  settings.host
}:${port}`;
console.log(proxy);
