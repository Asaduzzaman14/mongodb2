import { NextFunction, Request, Response } from "express";
import { getBooksFromDb, getFeaturedService, getTwoTypeBookFromDb, updatePriceServices } from "./book.service";



// Task 2: Implement a MongoDB query to find all books in the "Books" collection with a specific genre, such as "Fantasy"

export const getBooks = async (req: Request, res: Response) => {
    const { genre = "Science" } = req.query;
    console.log(genre);

    const book = await getBooksFromDb(genre)
    res.status(200).json({
        status: true,
        data: book
    })
}
// task 3
export const getTwoTypeBooks = async (req: Request, res: Response) => {
    // const { genre, publisher } = req.query;
    // console.log(genre);

    const book = await getTwoTypeBookFromDb(req.query)
    res.status(200).json({
        status: true,
        data: book
    })
}


// task 4 
export const updatePriceControler = async (req, res) => {
    await updatePriceServices()
    res.status(200).json({
        status: true,
        message: 'Salary is successfully updated'
    })
}



// task 5 
export const getFeatured = async (req: Request, res: Response, next: NextFunction) => {

    const featuredBook = await getFeaturedService()
    res.status(200).json({
        status: true,
        data: featuredBook
    })

}

