const mysql = require('mysql')
module.exports = () => {
    //创建链接
    let connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: "1707f"
    })
    //链接数据库
    connection.connect((error) => {
        if (error) {
            console.log('链接失败');
        } else {
            console.log('链接成功');
        }
    })
    //操作数据库

    return new Promise((resolve, reject) => {
        connection.query('select * from datalist', (error, data) => {
            if (error) {
                resolve(error)
            } else {
                reject(data)
            }
            connection.end()//关闭服务
        })
    })
}