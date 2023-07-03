const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexion a la DB establecida');
    await sequelize.sync({ force: false });
  } catch (error) {
    console.log('No se pudo establecer la conexion a la DB', error);
  }
};

module.exports = {
  sequelize,
  initializeDB,
};
