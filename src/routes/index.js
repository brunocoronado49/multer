import { Router } from 'express';
import { upload } from '../controllers/multerController.js';

// Initialize
const router = Router();

// Routes
router.get('/', (req, res) => {
    res.render('index');
});

router.post('/upload', upload, (req, res) => {
    console.log(req.file);
    res.send('Uploading!');
});


export default router;