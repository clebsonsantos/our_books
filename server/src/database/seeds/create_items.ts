import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('items').insert([
        {title: 'Romance', image: 'romance.svg'},
        {title: 'Policial', image: 'policial.svg'},
        {title: 'Fantasia', image: 'fantasia.svg'},
        {title: 'Poesia', image: 'poesia.svg'},
        {title: 'Religioso', image: 'religioso.svg'},
        {title: 'Outros', image: 'outros.svg'},

    ]);
}