import { HydratedDocument, Model } from "mongoose";

export interface IBook {
    id: string,
    title: string;
    author: string;
    genre: string;
    publicationYear: number;
    publisher: {
        name: string;
        location: string;
    };
    reviews: [{
        user: {
            type: string,
            required: true
        },
        comment: {
            type: string,
            rerquired: true
        },
    }];
    rating: number;
    price: string;
}




// Define the Book model interface with the static method


export interface BookModel extends Model<IBook, {}> {
    getFeaturedBooks();
}

