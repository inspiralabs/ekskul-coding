module.exports = {
  apps: [
    {
      name: "api-ekskul-coding",
      script: "server.js",
      cwd: __dirname,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
    },
  ],
};
