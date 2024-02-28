### Component Diagram ###
![Alt text](./data/TrafficFlow.drawio.png)

## Component Details: ##
* API Gateway : Nginx(:8080)
* MIcrosservices : Nodejs(prodt:3000,ord:3001, cust:3002)
* Database: MongoDB(:27017)
* Message Broker: Kafka(:9092)
* Assumption: Only one instance(process) act as 3 databases for 3 services and all deployment on my localhost.


### Schema Diagram ###
![Alt text](./data/Ecommerce_Collection_Scheme.png)
* customer schema include one primary key _id and there are 2 indexes one is _id and customer email.Reason for  2 indexes login we need to check customer email and for other operation done by _id.
* product schema include one primary key _id and 1 index.RUD operation done based on _id.
* order schema include one primary key _id and 1 index.RUD operation done based on _id.Relation between product and customer is completed by adding product_id and customer_id.Basically which customer order the product.



### Approach to designing each service ###
* customer service is for authenticate and authorization(of resources).This service act as entry point for other other services.
* product service manage stocks.
* order service consumes stocks from product service.In this when we get order  from customer , consumer producer push the data to hub from there product consumer consume that data and update stocks values(make update in product stocks).

### Scalability and Performance Considerations ###
* One of the obvious choice is horizontal scaling.


### Installation of Project ###
## Project install steps: ##
* install nodejs runtime , mongodb, kafka binary setup and any http client(for testing purpose) in your localhost
* ~sudo systemctl start mongodb.service~
* git clone https://github.com/akshaybhuradia2020/ecommerce_microservices.git
* cd ~proj dir~
* go to each service folder cd ~product_servies~ and run npm i
* npm install pm2@latest -g
* pm2 start ~go to each service base folder and select main.js~
* For kafka ~tar -xvf kafka_2.12-3.6.1.tgz~ and ~cd kafka_2.12-3.6.1~
* ~./bin/zookeeper-server-start.sh config/zookeeper.properties~
* ~./bin/kafka-server-start.sh config/server.properties~
* ~./bin/kafka-topics.sh --create --topic quickstart-events --bootstrap-server localhost:9092~
* configure nginx based on given file in data folder of this repo. ~sudo systemctl restart nginx~



### Ecommerce RestApi Design ###
Base URLs: http://localhost:8080

# Authentication
JWT 

## POST change_order_status

POST /order/api/change_order_status/65ddb8df1379b8d72e56ba04

> Body Parameters

```json
{
  "order_delivered_to_customer": true,
  "order_delivered_date": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string| yes |none|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|
|body|body|object| no |none|
|» order_delivered_to_customer|body|boolean| yes |none|
|» order_delivered_date|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
	"Message": "Order delivered to customer."
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<!-- ### Responses Data Schema -->

## POST customer_login

POST /customer/api/login

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|username|query|string| yes |none|
|passwd|query|string| yes |none|
|User-Agent|header|string| yes |none|

> Response Examples

> 200 Response

```json
{
	"message": "CORRECT CREDENTIALS",
	"uservalid": true,
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpa2FzQHh5ei5jb20iLCJpYXQiOjE3MDkwMzk2MDQsImV4cCI6MTcwOTA0MzIwNH0.ZI1FBXRTwBvDa9wX_-eixscVsiUDyvpImRaOBGpfwGQ",
	"userid": "65dc90a960127670a3d6d834"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<!-- ### Responses Data Schema -->

## GET get_customer_order

GET /customer/api/get_customer_order/65dc90a960127670a3d6d834

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|

> Response Examples

> 200 Response

```json
{
    "Result": []
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<!-- ### Responses Data Schema -->

## POST add_order

POST /order/api/add_order

> Body Parameters

```json
{
  "order_despcription": "string",
  "order_type": "string",
  "order_pickup": "string",
  "order_destination": "string",
  "order_shipper": "string",
  "order_weight": 0,
  "order_delivered_to_customer": true,
  "customer_id": "string",
  "product_id": "string",
  "order_quantity": 0,
  "order_date": "string",
  "order_delivered_date": null
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string| yes |none|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|
|body|body|object| no |none|
|» order_despcription|body|string| yes |none|
|» order_type|body|string| yes |none|
|» order_pickup|body|string| yes |none|
|» order_destination|body|string| yes |none|
|» order_shipper|body|string| yes |none|
|» order_weight|body|integer| yes |none|
|» order_delivered_to_customer|body|boolean| yes |none|
|» customer_id|body|string| yes |none|
|» product_id|body|string| yes |none|
|» order_quantity|body|integer| yes |none|
|» order_date|body|string| yes |none|
|» order_delivered_date|body|null| yes |none|

> Response Examples

> 200 Response

```json
{
	"Message": "Order is palced"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<!-- ### Responses Data Schema -->

## POST update_customer_details

POST /customer/api/update_customer/65dc8ee986f613732c94d8dd

> Body Parameters

```json
{
  "customer_address": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string| yes |none|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|
|body|body|object| no |none|
|» customer_address|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
	"Message": "Customer data is updated"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<!-- ### Responses Data Schema -->

## GET get_one_user

GET /customer/api/get_customer_id/65dc8ee986f613732c94d8dd

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|

> Response Examples

> 200 Response

```json
{
	"Result": [
		{
			"_id": "65dc8ee986f613732c94d8dd",
			"customer_name": "akshay bhuradia",
			"customer_address": "delhi",
			"customer_phone": "97164147797",
			"customer_wallet": 0,
			"customer_email": "akshay@xyz.com",
			"customer_passwd": "12345678",
			"__v": 0
		}
	]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<!-- ### Responses Data Schema -->

## GET get_all_user

GET /customer/api/get_customer_all

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|

> Response Examples

> 200 Response

```json
{
	"Result": [
		{
			"_id": "65dc8ee986f613732c94d8dd",
			"customer_name": "akshay bhuradia",
			"customer_address": "gurgoan",
			"customer_phone": "97164147797",
			"customer_wallet": 0,
			"customer_email": "akshay@xyz.com",
			"customer_passwd": "12345678",
			"__v": 0
		}]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<!-- ### Responses Data Schema -->

## POST delete_customer

POST /customer/api/delete_customer/65dc8da62000ba08d358536b

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|

> Response Examples

> 200 Response

```json
{
	"Message": "Customer is deleted"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<!-- ### Responses Data Schema -->

## POST add_customer

POST /customer/api/add_customer

> Body Parameters

```json
{
  "customer_name": "string",
  "customer_phone": "string",
  "customer_wallet": 0,
  "customer_email": "string",
  "customer_passwd": "string",
  "customer_address": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string| yes |none|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|
|body|body|object| no |none|
|» customer_name|body|string| yes |none|
|» customer_phone|body|string| yes |none|
|» customer_wallet|body|integer| yes |none|
|» customer_email|body|string| yes |none|
|» customer_passwd|body|string| yes |none|
|» customer_address|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
	"Message": "Customer is Added"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<!-- ### Responses Data Schema -->

## POST delete_product

POST /product/api/delete_product/65dc50dca309e72c781e40dd

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|

> Response Examples

> 200 Response

```json
{
	"message": "Product is deleted"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<!-- ### Responses Data Schema -->

## POST update_product

POST /product/api/update_product/65dd90abfe4c961034bb90c2

> Body Parameters

```json
{
  "product_stocks": 10
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string| yes |none|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|
|body|body|object| no |none|
|» product_stocks|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{
	"Message": "Product Updated"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<!-- ### Responses Data Schema -->

## GET get_all_product

GET /product/api/get_product_all

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|

> Response Examples

> 200 Response

```json
{
	"Result": [
		{
			"_id": "65dc4ccf87f9a3fd2c8065d1",
			"product_name": "p1",
			"product_despription": "dp1",
			"product_price": 10,
			"product_stocks": 10017,
			"__v": 0
		}]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<!-- ### Responses Data Schema -->

## GET get_product_by_id

GET /product/api/get_product_id/65dc4d43592035edbeccb67a

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|_id|query|string| no |none|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|

> Response Examples

> 200 Response

```json
{
	"Result": [
		{
			"_id": "65dc4d43592035edbeccb67a",
			"product_name": "p1",
			"product_despription": "dp1",
			"product_price": 10,
			"product_stocks": 100,
			"__v": 0
		}
	]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|
<!-- 
### Responses Data Schema -->

## POST add_product

POST /product/api/add_product

> Body Parameters

```json
{
  "product_name": "string",
  "product_despription": "string",
  "product_price": 800,
  "product_stocks": 10
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string| yes |none|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|
|body|body|object| no |none|
|» product_name|body|string| yes |none|
|» product_despription|body|string| yes |none|
|» product_price|body|integer| yes |none|
|» product_stocks|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{
	"message": "Product is Added"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<!-- ### Responses Data Schema

# Data Schema -->

