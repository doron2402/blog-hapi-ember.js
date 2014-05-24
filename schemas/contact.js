var contactSchema = dblog.Mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    message: String,
    reffer: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = contactSchema;