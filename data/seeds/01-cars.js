// STRETCH
const cars = [
    {vin: '11111111111111111',
     make: 'Toyota',
     model: 'Rav 4',
     mileage: 50000, 
     title: 'salvage',
     transmission: 'manual'
    },
    {vin: '11111111111111113',
    make: 'Dodge',
    model: 'Ram',
    mileage: 1500, 
    title: 'clean'
   },
   {vin: '11111111111111112',
   make: 'Chevy',
   model: 'Nova',
   mileage: 19000, 
   title: 'clean',
   transmission: 'auto'
  },
]

exports.cars = cars

exports.seed = function (knex) {
    return knex('cars').truncate()
      .then(() => {
        return knex('cars').insert(cars);
      });
  };
  