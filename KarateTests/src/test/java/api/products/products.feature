# Feature: Posts API karate test script 

#   Background:
#     * url 'http://localhost:8080/'

#   Scenario: get all products and then get the first product by id
#     Given path 'api/products'
#     When method get
#     Then status 200

#     * def first = response[0]

#     Given path 'api/products', first.id
#     When method get
#     Then status 200

#   Scenario: create a product and then get it by id
#     * def product =
#       """
# {
# 	"id": 99,
# 	"version": "null",
# 	"dateCreated": "null",
# 	"lastUpdated": "null",
# 	"coinName": "Ethereum2",
# 	"coinDescription": "coinDescription",
# 	"price": "price",
# 	"productCategories": [],
# 	"imageUrl": "imageUrl",
# 	"symbol": "ETH",
# 	"category": "coin",
# 	"retailPrice": 94.83,
# 	"discountedPrice": 66.83,
# 	"volume": 120005.0
# }
#       """

#     Given url 'http://localhost:8080/api/products'
#     And request post
#     When method post
#     Then status 201

#     * def id = response.id
#     * print 'created id is: ', id

#     Given path id
#     When method get
#     Then status 200
#     And match response contains product
  