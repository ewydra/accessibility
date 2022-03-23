module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000/"],
      startServerCommand: "npm start",
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      assertions: {
        "categories:performance": "off",
        "categories:pwa": "off",
      },
    },
  },
};
