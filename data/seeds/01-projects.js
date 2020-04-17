exports.seed = function (knex) {
  return knex("projects").insert([
    { name: "React project", description: "project for react" },
    { name: "Node project", description: "project for node" },
    { name: "SQL project", description: "project for sql" },
    { name: "Independent project", description: "anything you want" },
  ]);
};
