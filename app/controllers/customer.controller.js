const db = require("../models");
const config = require("../config/auth.config");
const Customer = db.customer;

exports.all = (req, res) => {
  Customer.findAll()
    .then((customer) => {
      res.status(200).send({
        message: "Data berhasil di dapatkan",
        data: customer
      })
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
}


exports.create = (req, res) => {
    // Save customer to Database
    Customer.create({
      nama: req.body.nama,
      email: req.body.email,
      alamat: req.body.alamat,
      nohp: req.body.nohp,
      tanggal_lahir: req.body.tanggal_lahir,
    })
      .then(user => {
        res.send({ message: "Customer was registered successfully!" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });

  };

  // exports.update = (req, res) => {

  //     //update
  //     Customer.update({
  //       nama: req.body.nama,
  //       email: req.body.email,
  //       alamat: req.body.alamat,
  //       nohp: req.body.nohp,
  //       tanggal_lahir: req.body.tanggal_lahir,
  //     },
  //       {
  //         where: {
  //           id: req.params
  //         }
  //       })
        
  //       .then(user => {
  //         res.send({ message: "Data with id ${id} success to updated" });
  //       })
  //       .catch(err => {
  //         res.status(500).send({ message: err.message });
  //       });
  // };

  exports.update = (req, res) => {
    Customer.findOne({
      where: {
        id: req.params.id
      }
    }).then((customer) => {
      if (!customer) {
        return res.status(404).send({ message: "Customer tidak ditemukan." });
      }
      const { nama, email, alamat, nohp, tanggal_lahir } = req.body;
      customer.update({
        nama, email, alamat, nohp, tanggal_lahir
      })
        .then(
          (customer) => {
            res.status(200).send({
              message: "Customer behasil di update!",
              data: customer
            })
          }
        )
    })
  }

  exports.byId = (req, res) => {
    Customer.findOne({
      where: {
        id: req.params.id
      }
    })
      .then((customer) => {
        if (!customer) {
          res.status(404).send({
            message: "Customer tidak ditemukan",
            data: customer
          });
        }
        res.status(200).send({
          message: "Data berhasil di dapatkan",
          data: customer
        });
      }).catch(err => {
        res.status(500).send({ message: err.message });
      });
  }

  exports.delete = (req, res) => {
    Customer.destroy({
      where: {
        id: req.params.id
      }
    }
    )
      .then((customer) => {
        res.status(200).send({
          message: "Data berhasil di dihapus",
          data: customer
        })
      }).catch(err => {
        res.status(500).send({ message: err.message });
      });
  }