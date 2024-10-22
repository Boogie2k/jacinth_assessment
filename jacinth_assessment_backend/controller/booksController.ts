const  Books = require("../modal/modal");
import { Request, Response } from "express";

const createBook = async (req: Request, res: Response) => {
    try {
        const book = await Books.create(req.body);
        console.log(req.body)
        
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error });
    }
    }
const getBooks = async (req: Request, res: Response) => {
    try {
        const books = await Books.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error});
    }
    }
const getBook= async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const book = await Books.findById(id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
    }

    const deleteBook = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const book = await Books.findByIdAndDelete(id);
            if (book) {
                res.status(200).json({ message: "Product deleted successfully" });
            } else {
                res.status(404).json({ message: "Product not found" });
            }
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    module.exports = { createBook, getBooks, getBook, deleteBook };