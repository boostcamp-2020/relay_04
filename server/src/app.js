const express = require('express');
const hpp = require('hpp');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');

const userAPIRouter = require('./routes/user');
const postsAPIRouter = require('./routes/posts');
const postAPIRouter = require('./routes/post');

const prod = process.env.NODE_ENV === 'production';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routers();
  }

  middlewares() {
    if (prod) {
      this.app.use(hpp());
      this.app.use(helmet());
      this.app.use(logger('combined'));
    } else {
      this.app.use(logger('dev'));
    }
    this.app.use(
      cors({
        origin: true,
        credentials: true,
      }),
    );

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser(process.env.COOKIE_SECRET));
    this.app.use(
      expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
          httpOnly: true,
          secure: false,
          domain: prod ? 'domainName' : undefined,
        },
        name: 'cksnks',
      }),
    );
  }

  routers() {
    this.app.use('/api/user', userAPIRouter);
    this.app.use('/api/posts', postsAPIRouter);
    this.app.use('/api/post', postAPIRouter);
  }
}

module.exports = new App().app;
