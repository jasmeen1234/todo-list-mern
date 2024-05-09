"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const tasks_1 = __importDefault(require("./routes/tasks"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb+srv://jasmeenbano12:PqlpgopvIyoZigFH@cluster0.g7hbq3n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// Middleware
app.use(body_parser_1.default.json());
// Routes
app.use('/api/tasks', tasks_1.default);
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};
// Connect to MongoDB
mongoose_1.default.connect(MONGO_URI, mongooseOptions
// Use this option to handle deprecation warning
)
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.error('MongoDB connection error:', error);
});
