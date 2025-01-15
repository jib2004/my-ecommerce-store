import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import * as url from 'url';
import authRouter from './routes/users/auth.js'
import connectDb from './middleware/connectDb.js'


const app = express()
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true

}))
app.use(cookieParser())
dotenv.config()
connectDb(process.env.MONGODB_URI)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + path.extname(file.originalname)
      cb(null, file.fieldname + '_' + uniqueSuffix)
    }
  })

  const upload = multer({ storage: storage })
app.use(express.static('uploads'))// allows you access this file

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.post('/upload',upload.single('profile'),(req,res)=>{
    res.send('Upload Successfully')
    res.json(req.file.filename)
})




// File download endpoint
// app.get('/download/:filename', (req, res) => {
//     const fileName = req.params.filename;
//     const filePath = path.join(__dirname, 'uploads', fileName);
  
//     try {
//       if (fs.existsSync(filePath)) {
//         res.sendFile(filePath);
//       } else {
//         res.status(404).send('File not found.');
//       }
//     } catch (error) {
//       console.error('Error downloading file:', error);
//       res.status(500).send('Internal server error.');
//     }
//   });


app.get('/getImage', (req, res) => {
   
  });

  app.use("/auth",authRouter)

app.listen(process.env.PORT,()=>{
    console.log('server is running on port 5000')
})