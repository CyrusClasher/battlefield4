const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000; // You can choose any port

app.use(cors()); // Enable Cross-Origin Resource Sharing

// Dummy data (for now)
const regionSettingList = [
  { regionLabel: "Region", regionValue: "Europe - DE" },
  { regionLabel: "Punkbuster", regionValue: "ON" },
  { regionLabel: "Fairfight", regionValue: "ON" },
  { regionLabel: "Password", regionValue: "OFF" },
  { regionLabel: "Preset", regionValue: "Normal" },
];

const advancedSettingList = [
  { label: "Minimap", value: "ON" },
  { label: "Only Squad Leader Spawn", value: "OFF" },
  { label: "Vehicles", value: "ON" },
  { label: "Team Balance", value: "ON" },
  { label: "Minimap Spotting", value: "ON" },
  { label: "HUD", value: "ON" },
  { label: "3P Vehicle Cam", value: "ON" },
  { label: "Regenerative Health", value: "ON" },
  { label: "Kill Cam", value: "ON" },
  { label: "Friendly Fire", value: "OFF" },
  { label: "3D Spotting", value: "ON" },
  { label: "Enemy Name Tags", value: "ON" },
];

const rulesSettingList = [
  { label: "Tickets", value: "400" },
  { label: "Vehicle Spawn Delay", value: "25" },
  { label: "Bullet Damage", value: "100" },
  { label: "Kick After Team Kills", value: "5" },
  { label: "Player Health", value: "100" },
  { label: "Player Respawn Time", value: "100" },
  { label: "Kick After Idle", value: "300" },
  { label: "Ban After Kicks", value: "3" },
];

// Define API endpoints
app.get("/api/region-settings", (req, res) => {
  res.json(regionSettingList);
});

app.get("/", (req, res) => {
  res.send("Working!");
});

app.get("/api/advanced-settings", (req, res) => {
  res.json(advancedSettingList);
});

app.get("/api/rules-settings", (req, res) => {
  res.json(rulesSettingList);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
