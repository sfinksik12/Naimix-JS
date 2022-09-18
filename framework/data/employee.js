const { faker } = require('@faker-js/faker');


export default
[
    {
      lastname: "Щелоков", firstname: "Павел", sername: "Михайлович",
      snils: '28092121360', inn: '813050546060',
      position: '"Менеджер"', role: '"Администратор компании"',
      phone: '9536437416', email: faker.internet.email('Company_Admin'),
      password: 'Www1234!', repeatPassword: 'Www1234!'
     },
    
    {
        lastname: "Петров", firstname: "Павел", sername: "Михайлович",
        snils: '28092121360', inn: '813050546060',
        position: '"Главный бухгалтер"', role: '"Администратор компании"',
        phone: '9536437416', email: faker.internet.email('Company_Admin'),
        password: 'Www1234!', repeatPassword: 'Www1234!'
      }
];