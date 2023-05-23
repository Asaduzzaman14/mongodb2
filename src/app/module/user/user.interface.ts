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





export interface BookModel extends Model<IBook, {}> {
    getFeaturedBooks(): Promise<HydratedDocument<IBook>>;
}
