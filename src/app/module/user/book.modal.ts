import { Schema, model } from "mongoose";
import { IBook } from "./user.interface";



const bookSchema = new Schema<IBook>({
    id: {
        type: String,
        require: true,
        unique: true,
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publicationYear: {
        type: Number,
        rewured: true
    },
    publisher: {
        name: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
    },
    reviews: {
        type: [{
            reviewer: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }],
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
})



bookSchema.static('getFeaturedBooks', async function getFeaturedBooks() {
    this.aggregate([
        {
            $match: {
                rating: { $gte: 4 },
            },
        },
        {
            $addFields: {
                featured: {
                    $cond: [
                        { $gt: ['$rating', 4.5] },
                        'BestSeller',
                        'Popular',
                    ],
                },
            },
        },
    ])

});


// carete modal using schema

const Book = model<IBook>('Book', bookSchema);

export default Book;