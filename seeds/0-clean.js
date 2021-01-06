exports.seed = function (knex, Promise) {
  const empty = table =>
    () => knex(table).del()

  return empty('tasks')()
  .then(empty('profiles'))
  .then(empty('users'))
}
