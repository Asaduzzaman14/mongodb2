import Book from "./book.modal"

export const getBooksFromDb = async (param) => {
    const books = await Book.find({ genre: param })
    return books
}


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

    // const adminUser = await Book. 
    // return adminUser
}