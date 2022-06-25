const multer = require('multer');

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

  exports.upload = multer({storage: storage, fileFilter: fileFilter });

  exports.uploadSingleImage=async(req,res)=>{
    
    const allquery = await client.query(`INSERT INTO img(name, img)  VALUES ('${req.body.name}', '${req.file.filename}')`);
       
    res.status(200).json({'statusCode':200, 'status':true, message: 'Image added','data':[]});
       
   }

   exports.uploadMultipleImage = async(req,res) =>{
         
      for(var i=0;i<req.files.length;i++){
        const allquery = await client.query(`INSERT INTO img(name, img) VALUES ('${req.body.name}','${req.files[i].filename}')`);
         }
     res.status(200).json({'statusCode':200, 'status':true,
    message: 'All Image added','data':[]});
   }