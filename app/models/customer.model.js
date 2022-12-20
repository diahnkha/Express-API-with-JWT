module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customers", {
      nama: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      nohp: {
        type: Sequelize.STRING
      },
      tanggal_lahir: {
        type: Sequelize.DATE
      }
    });
  
    return Customer;
  };