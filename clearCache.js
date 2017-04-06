var CFClient = require("cloudflare");
var key = require("./cloudflareKey.js");

var client = new CFClient({
    email: "sethkranzler@gmail.com",
    key: key
});

client.deleteCache("042e4d16d6c71934c034000c86d62c60", {"purge_everything":true}).then(data => {
  if(data !== true){
    console.error("📛 cloudflare cache not cleared 📛");
  } else {
    console.log("🤓 cloudflare cache successfully cleared 🤓");
  }
});