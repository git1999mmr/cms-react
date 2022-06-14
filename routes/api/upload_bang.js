let express = require('express'),
  multer = require('multer'),
  mongoose = require('mongoose'),
  uuidv4 = require('uuid/v4'),
  router = express.Router();
const DIR = './public/';
const UploadBang = require('../../models/UploadBang');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const filename = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, uuidv4() + '~~' + filename);
  }
});
var upload_multer = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg' ||
      file.mimetype == 'application/pdf' ||
      file.mimetype == 'application/msword' ||
      file.mimetype ==
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(
        new Error(
          'Only .png, .jpg, .jpeg, .pdf, .doc and .docx format allowed!'
        )
      );
    }
  }
});
// Upload model

router.post('/', upload_multer.single('profileImg'), (req, res, next) => {
  // console.log('call file upload', req);
  const url = req.protocol + '://' + req.get('host');
  const upload = new UploadBang({
    _id: new mongoose.Types.ObjectId(),
    filename: req.body.name,
    profileImg: url + '/public/' + req.file.filename
  });
  upload
    .save()
    .then((result) => {
      res.status(201).json({
        message: 'Userbglr registered successfully!',
        userCreated: {
          _id: result._id,
          profileImg: result.profileImg
        }
      });
    })
    .catch((err) => {
      console.log(err),
        res.status(500).json({
          error: err
        });
    });
});

router.get('/', (req, res, next) => {
  UploadBang.find().then((data) => {
    res.status(200).json({
      upload: data
    });
  });
});
module.exports = router;
