const { faker } = require('@faker-js/faker');


export default
[
    {
      lastname: "Петров", firstname: "Павел", sername: "Юрьевич",
      snils: '28092121360', inn: '813050546060',
      position: '"Главный бухгалтер"', role: '"Администратор компании"',
      phone: '9536437416', email: faker.internet.email('Admin'),
      password: 'Www1234!', repeatPassword: 'Www1234!'
     },
    {
        lastname: "Галкин", firstname: "Павел", sername: "Михайлович",
        snils: '84295321621', inn: '162475143340',
        position: '"Менеджер"', role: '"Администратор компании"',
        phone: '9536437416', email: faker.internet.email('Admin'),
        password: 'Www1234!', repeatPassword: 'Www1234!'
    }
];