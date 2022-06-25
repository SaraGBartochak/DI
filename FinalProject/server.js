const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();

const PORT = process.env.PORT || 3001;

app.use('/',express.static(path.join(__dirname,'/public')));
app.use('/upload', express.static(path.join(__dirname,'/uploads')));

app.listen(`${PORT}`, ()=> {
  console.log(`listen on port ${PORT}` );
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

const fileFilter = (req, file, cb) => {
  if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpg'){
    cb(null, true)
  }
  else{
    cb(null, false)
  }
}

const upload = multer({storage: storage, fileFilter: fileFilter });

app.post('/cards', upload.single('image') , (req,res)=>{
  try{
    return res.status(201).json({msg:'file uploaded'})
  }
  catch(e){
    console.log(e);
  }
});