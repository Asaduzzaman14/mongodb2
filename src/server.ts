import mongoose from 'mongoose'
import app from './app'


const port: number = 5000;






async function mongooseApp() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/apllo-mongoose');

    } catch (error) {
        console.log(`Failed to connect database ${error}`);
    }
}

app.listen(port, () => {
    console.log(`Mongoose app listening on port ${port}`)
})

mongooseApp()


