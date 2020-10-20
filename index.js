const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require('./routers/users');
const authRouter = require('./routers/auth');
const listsRouter = require('./routers/lists');
const itemsRouter = require('./routers/lists');
const { logger } = require('./middleware/auth');

const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(logger);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/lists', listsRouter);
app.use('/items', listsRouter);

app.get('/', (req, res) => {
  res.send('Grocery List Server!')
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});