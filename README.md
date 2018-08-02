# livecodephase2-server




router.get('/', userController.getUsers)
router.post('/register', userController.register)
router.post('/login', userController.login)


module.exports = router;

ARTICLES API

GET ALL DATA ('articles/')
POST  DATA ('articles/')
GET ONE DATA ('articles/:id')
GET by category DATA ('articles/category/:category')
GET by author DATA ('articles/author/:author')
DELETE DATA ('articles/delete/:id')
PUT UPDATE DATA ('articles/update/:id'')

USER API
GET DATA USER ('/users')
POST LOGIN USER ('/users/login')
GET REGISTER USER ('/users/register')
