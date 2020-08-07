const { sequelize } = require('../models');

const app = require('./app');

const PORT = process.env.PORT || 4000;
app.set('port', PORT);

const handelAppStat = () => console.log(`server is running on ${app.get('port')}`);

sequelize
  .sync({ force: false })
  .then(() => app.listen(app.get('port'), handelAppStat))
  .catch((error) => console.log(error));
