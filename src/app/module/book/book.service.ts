import { BookModel } from './book.interface';
import Book from "./book.modal"


// Task 2:
export const getBooksFromDb = async (param) => {
    const books = await Book.find({ genre: param })
    return books
}


// task 3
export const getTwoTypeBookFromDb = async (param) => {
    const { genre, publisher } = param;
    console.log(genre, publisher);
    const books = await Book.find({
        $and: [
            { genre: `${genre}` },
            { "publisher.name": { $eq: `${publisher}` } }
        ]
    })
    return books
}

// task 4 
export const updatePriceServices = async () => {
    const books = await Book.updateMany({
        publicationYear: { $gt: 2020 },
        price: { $type: 'string' }
    },
        [
            {
                $set: {
                    price: { $toInt: '$price' }
                }
            }
        ])
    return books;

}


export const getFeaturedService = async () => {

    const result = await Book.getFeaturedBooks()
    return result
}