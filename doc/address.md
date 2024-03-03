# Address API spec

## Create Address
Endpoint : POST /api/contacts/:idContact/addresses

Request Header
- X-API TOKEN : token

Request Body :

```json
{
  "street": "Jalan Bambu",
  "city": "Mountailend",
  "country": "Indonesia",
  "postal_code": "231231"
}
```

Response body ( Success )

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Bambu",
    "city": "Mountailend",
    "country": "Indonesia",
    "postal_code": "231231"
  }
}
```

Response body ( Failed )

```json
{
  "erros": "street is required"
}
```

## Get Address
Endpoint : GET /api/contacts/:idContact/addresses/:idAddress

Request Header
- X-API TOKEN : token

Response body ( Success )

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Bambu",
    "city": "Mountailend",
    "country": "Indonesia",
    "postal_code": "231231"
  }
}
```

Response body ( Failed )

```json
{
  "erros": "Address is found"
}
```
## Update Address
Endpoint : PUT /api/contacts/:idContact/addresses/:idAddress

Request Header
- X-API TOKEN : token

Request Body :

```json
{
  "street": "Jalan Bambu",
  "city": "Mountailend",
  "country": "Indonesia",
  "postal_code": "231231"
}
```

Response body ( Success )

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Bambu",
    "city": "Mountailend",
    "country": "Indonesia",
    "postal_code": "231231"
  }
}
```

Response body ( Failed )

```json
{
  "erros": "street is required"
}
```

## Remove Address
Endpoint : DELETE /api/contacts/:idContact/addresses/:idAddress

Request Header
- X-API TOKEN : token


Response body ( Success )

```json
{
  "data": "Ok"
}
```

Response body ( Failed )

```json
{
  "erros": "Address is not found"
}
```

## List Address
Endpoint : GET   /api/contacts/:idContact/addresses

Request Header
- X-API TOKEN : token



Response body ( Success )

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jalan Bambu",
      "city": "Mountailend",
      "country": "Indonesia",
      "postal_code": "231231"
    },
    {
      "id": 2,
      "street": "Jalan Bambu",
      "city": "Mountailend",
      "country": "Indonesia",
      "postal_code": "231231"
    }
  ]
}
```

Response body ( Failed )

```json
{
  "erros": "Contact is not found"
}
```