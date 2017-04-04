exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tacos').del()
    .then(function() {
      // Inserts seed entries
      return knex('tacos').insert([{
          id: 1,
          name: 'Burrito Taco',
          picture: 'http://cdn.danspapers.com/wp-content/uploads/2013/10/BurritoMeme.jpg',
          description: 'Oh alright um, no no no stop!'
        },
        {
          id: 2,
          name: 'The Tasty Tom',
          picture: 'http://img.foodnetwork.com/FOOD/2013/04/22/DV1701_Guy-Fieri-Tacos-and-Tots_s4x3_lg.jpg',
          description: 'Straight out of Flavor Towm.'
        },
        {
          id: 3,
          name: 'Ice Cream Burrito Taco',
          picture: 'https://images-gmi-pmc.edge-generalmills.com/d781f02b-701b-49b6-adf5-c1832693bdc8.jpg',
          description: 'Very nice'
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('tacos_id_seq', (SELECT MAX(id) FROM tacos));")
    })
};
