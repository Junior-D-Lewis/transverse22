
const {ImgUpload} = require('../../db/sequelize')
const multer = require('multer');
const path = require('path');

module.exports = (app) => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'src/assets/images');
        },
        filename: (req, file, cb) => {
            console.log(file);
            cb(null, Date.now() +  path.extname(file.originalname));
        }
    });

    const upload = multer({storage: storage});

    app.post('/api/upload', upload.single('files'), (req, res) => {
        console.log(req.file);
        res.json(req.file); 
    });
}


/*const {ImgUpload} = require('../../db/sequelize')
const imageDownloader = require('node-image-downloader')

module.exports = (app) => {
    app.post('/api/upload', (req, res) => {
        console.log(req.body);
        imageDownloader({
            imgs: [
              {
                uri: req.body.image,
                filename: 'profile22.jpg',
              },
            ],
            dest: 'src/routes/downloads', //destination folder 
          })
            .then((info) => {
              console.log('all done', info)
            }) 
            .catch((error, response, body) => {
              console.log('something goes bad!')
              console.log(error)
            })
    }) 
}*/