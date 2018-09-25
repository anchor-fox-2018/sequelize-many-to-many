const app = require('express')()
const bodyParser = require('body-parser')
const indexRoute = require('./routes/index.js')
const teacherRoute = require('./routes/teacher.js')
const studentRoute = require('./routes/student.js')
const subjectRoute = require('./routes/subject.js')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/', indexRoute)
app.use('/teachers', teacherRoute)
app.use('/students', studentRoute)
app.use('/subjects', subjectRoute)

app.listen(3000)