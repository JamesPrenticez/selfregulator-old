exports.seed = (knex, Promise) => {
  return knex('profiles').insert([
    {id: 1, user_id: 1, profile_picture: '/img/profile_pictures/jp.jpg'},
    {id: 2, user_id: 2, profile_picture: '/img/profile_pictures/bj.jpg'},
  ])
}