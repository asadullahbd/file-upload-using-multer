import express from "express";
import * as FileUploadController from "../controller/FileUploadController.js";
import upload from "../middleware/FileUpload.js";
const router = express.Router();

router.post(
    "/file-upload",
    upload.array("file", 20),
    FileUploadController.fileUpload
);

export default router;
