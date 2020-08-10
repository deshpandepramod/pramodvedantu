##APIs have been developed in below pattern:

Accounts Related API:-
##User Registeration API:
curl --location --request POST 'http://localhost:5000/api/account/register' \
--header 'Content-Type: application/json' \
--data-raw '{   "name":"eee",
    "email":"eee@gmail.com",
    "password":"eeeeeee"
}'

##Create Admin API:
curl --location --request GET 'http://localhost:5000/api/account/createadmin'


##User Signing in API:
curl --location --request POST 'http://localhost:5000/api/account/signin' \
--header 'Content-Type: application/json' \
--data-raw '{ "email":"eee@gmail.com",
    "password":"eeeeeee"
}'


##Update User Profile API:
curl --location --request PUT 'http://localhost:5000/api/account/5f269a6c05ce4523cdd14e89' \
--header 'Authorization: <User Token>' \
--header 'Content-Type: application/json' \
--data-raw '{ 
    "name": "changed now",
    "email":"eee@gmail.com"
    
}'

/////////////////////////////////////////////////////////////////////////////////////////////
###Orders Related APIs:

##Get all orders curl:
curl --location --request GET 'http://localhost:5000/api/orders' \
--header 'Authorization: <Admin User Token>' \
--data-raw ''

##Get order by id curl:
curl --location --request GET 'http://localhost:5000/api/orders/5f269818edbe1922784cb0a8' \
--header 'Authorization: <User Token>'

##Delete order curl:
curl --location --request DELETE 'http://localhost:5000/api/orders/5f269818edbe1922784cb0a8' \
--header 'Authorization: <Admin User Token'

##Place order curl:
curl --location --request POST 'http://localhost:5000/api/orders/' \
--header 'Authorization: <User Token>' \
--header 'Content-Type: application/json' \
--data-raw '{   
    "user":"5f25c83dfc50fe61b7fc4e18",
    "orderItems":{
        "name":"BBBB",
        "qty":1,
        "price":"2222",
        "product":"5f268debe9ed751c1915c8ca"
    },
    "shipping":{
        "address":"address",
        "city":"Hyd",
        "postalCode":"500032",
        "country":"India"
    },
    "payment":{
        "paymentMethod":"cash"
    },
    "itemsPrice":12345,
    "totalPrice":1000000
}'

##Pay for ordered items curl:
curl --location --request PUT 'http://localhost:5000/api/orders/5f2696d9e9ed751c1915c8dc/pay' \
--header 'Authorization: < User Token>' \
--data-raw ''

///////////////////////////////////////////////////////////////////////////////////////////////
###Products Related APIs:
##Get all products curl:
curl --location --request GET 'http://localhost:5000/api/products' \
--header 'Authorization: <Amdin User Token>' \
--data-raw ''

##Get product details curl:
curl --location --request GET 'http://localhost:5000/api/products/5f268debe9ed751c1915c8ca' \
--header 'Authorization: <Amdin User Token>' \
--data-raw ''

##Post product reviews curl:
curl --location --request POST 'http://localhost:5000/api/products/5f268debe9ed751c1915c8ca/reviews' \
--header 'Authorization: <Admin user token>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"name222222",
    "rating":5,
    "comment":"best one"
}'

##Update Product curl:
curl --location --request PUT 'http://localhost:5000/api/products/5f268debe9ed751c1915c8ca' \
--header 'Authorization: <Admin User Token>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"name222222",
    "price": 1000,
    "image": "image url",
    "brand": "xyz abc",
    "category": "category xyz",
    "countInStock": 100,
    "description": "description description",
    "rating":5,
    "numReviews":1000
}'

##Delete Product curl:
curl --location --request DELETE 'http://localhost:5000/api/products/5f268d742a36c11be265f799' \
--header 'Authorization: <Admin User Token>' \
--data-raw ''


##Create Product curl:
curl --location --request POST 'http://localhost:5000/api/products' \
--header 'Authorization: <Admin User Token>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"name11",
    "price ": 1000,
    "image": "image url",
    "brand": "xyz abc",
    "category": "category xyz",
    "countInStock": 100,
    "description": "description description",
    "rating":5,
    "numReviews":1000
}'



