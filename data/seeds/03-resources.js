exports.seed = function (knex) {
  return knex("resources").insert([
    { project_id: 1, name: "cs lab", description: "description" },
    { project_id: 1, name: "FE masters course", description: "description" },
    { project_id: 2, name: "heroku db", description: "description" },
    { project_id: 3, name: "oracle db", description: "description" },
    { project_id: 4, name: "rental laptop", description: "description" },
  ]);
};
