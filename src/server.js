const { port } = require('./config')

module.exports = app => {
    app.listen(port, () => {
        console.log(`server en port, ${port}`);
    })
}