## task and question answer


### task 1 
```

export interface IBook {
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



const bookSchema = new Schema<IBook>({
   
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

const Book = model<IBook>('Book', bookSchema);

export default Book;

```



#### api 2 

```
 http://localhost:5000/api/v1/book/task2?genre=Fantasy
```


### api 3
```
http://localhost:5000/api/v1/book/task3?genre=Sci-Fi&publisher=Roli%20Books
```


### task 4

```
db.books.aggregate([
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
```



#### Question 1: What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection? 



Creating a model with an interface and schema in MongoDB brings several benefits, including ensuring data integrity and validation, maintaining data consistency and structure, modeling relationships and associations, providing a higher-level interface for data access and manipulation, facilitating code organization and reusability, and contributing to improved application performance.

By defining the structure of a collection using a schema, you establish a blueprint for the documents that will be stored in that collection. It ensures that the data conforms to a specific structure, data types, and validation rules. This brings consistency, data integrity, and clarity to your MongoDB collection.


#### Question 2: Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?


Field filtering in MongoDB allows you to specify which fields to include or exclude in the returned documents when querying a collection. It provides control over the shape and size of the data returned by a query, allowing you to retrieve only the necessary fields and optimize network and processing resources

To include specific fields in the returned documents, we use the projection parameter in MongoDB queries. The projection parameter accepts an object where the fields to be included are set to 1, and all other fields are set to 0 or omitted entirely.


#### Question 3: What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

In MongoDB models, instance methods are functions defined on individual document instances. These methods can be accessed and called on a specific document object created from a model. They provide a way to add custom behavior and functionality to the individual documents
```
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  publicationYear: Number,
  // ... other fields
});

// Custom instance method
bookSchema.methods.getBookInfo = function() {
  return `${this.title} by ${this.author}`;
};

// Usage
const book = new Book({
  title: 'Book 1',
  author: 'Author 1',
  genre: 'Mystery',
  publicationYear: 2020
});

console.log(book.getBookInfo());
```
The purpose of the getBookInfo method is to retrieve and return a formatted string representation of the book's title, author. It combines these properties of the book document using this to refer to the current document instance. The method can be called on any specific book document object to retrieve its information.


#### Question 4: How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

In MongoDB, comparison operators are used to perform conditional queries to compare values in documents. The comparison operators we mentioned are commonly used in MongoDB queries.
examples:

$ne (Not Equal to): This operator matches values that are not equal to a specified value.
```
db.collection.find({ age: { $ne: 30 } })
```
$gt (Greater Than): This operator matches values that are greater than a specified value.

```
db.collection.find({ price: { $gt: 50 } })
```

$lt (Less Than): This operator matches values that are less than a specified value.

```
db.collection.find({ quantity: { $lt: 100 } })
```

$gte (Greater Than or Equal to): This operator matches values that are greater than or equal to a specified value.

```
db.collection.find({ rating: { $gte: 4.5 } })
```

$lte (Less Than or Equal to): This operator matches values that are less than or equal to a specified value
```
db.collection.find({ score: { $lte: 80 } })
```



### Question 5: What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

MongoDB's "$in" and "$nin" operators are used to match or exclude values against an array of values
$in Operator: This operator matches documents where a specified field's value matches any value in a given array.

$nin Operator: This operator matches documents where a specified field's value does not match any value in a given array.

Both operators can be used with any field in the document and are not limited to just arrays. You can also use them with single values or combine them with other query operators for more complex conditions.