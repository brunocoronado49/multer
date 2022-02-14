import multer from 'multer'
import path from 'path';
import { __dirname } from '../config.js';
import { v4 as uuid } from 'uuid';

const storage = multer.diskStorage({
    destination: path.join(__dirname, './public/uploads'),
    filename: (req, file, callback) => {
        callback(null, uuid() + path.extname(file.originalname).toLocaleLowerCase());
    }
});

export const upload = multer({
    dest: path.join(__dirname, './public/uploads'),
    storage: storage,
    limits: { fileSize: 3000000 },
    fileFilter: (req, file, callback) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        
        // con test checamos si el valor que le pasamos coincide con fileTypes 
        const mimeType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));
        if(mimeType && extname) {
            return callback(null, true);
        }
        callback("Error: imagen no válida!");
    }
}).single('image');