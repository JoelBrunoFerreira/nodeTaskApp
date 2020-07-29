const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();

// Middleware for maintenance mode
// app.use((req, res, next) => {
//     res.status(503).send('This site is currently down. come back son!');
// });

app.use(express.json()); // The same as body-parser
app.use(userRouter);
app.use(taskRouter);

// Listening on PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is up on port ' + PORT);
});


