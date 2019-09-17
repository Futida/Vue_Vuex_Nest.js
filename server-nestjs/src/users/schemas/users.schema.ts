import * as mongoose from 'mongoose';

export const users = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    date: String,
}, {
    collection: 'users',
});
