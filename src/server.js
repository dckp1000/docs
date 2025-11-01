// src/server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// --- Root Health Check ---
app.get("/", (req, res) => {
  res.status(200).json({
    status: "Oracle Edge API is live 🚀",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "production",
  });
});

// --- Example API Route: /api/forecast ---
app.get("/api/forecast", (req, res) => {
  res.status(200).json({
    league: "NFL",
    oracle_status: "Active",
    powered_by: "Oracle Edge AI",
    message: "Forecast endpoint ready for live model integration.",
  });
});

// --- Example API Route: /api/system ---
app.get("/api/system", (req, res) => {
  res.status(200).json({
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    node_version: process.version,
  });
});

// --- Serverless export for Vercel ---
export default app;
