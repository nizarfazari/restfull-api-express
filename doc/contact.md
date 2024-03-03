# Contact API Spec

## Create Contact 

Endpoint : POST /api/contacts

Request Header : 
- X-API-TOKEN : token

Request Body 
```json
{
  "first_name" : "nizar",
  "last_name" : "fazar",
  "email" : "nizar@gmail.com",
  "contact" : "08123213"
}
```

Response Body ( Success )

```json
{
  "data": {
    "id": 1,
    "first_name": "nizar",
    "email": "nizar@gmail.com",
    "phone":  "0812321321"
  }
}
```

Response Body ( Failed )
```json
{
  "erros" : "firstname must not blank"
}
```
## Get Contact
Endpoint : POST /api/contacts/:id

Request Header :
- X-API-TOKEN : token

Response Body ( Success )

```json
{
  "data": {
    "id": 1,
    "first_name": "nizar",
    "email": "nizar@gmail.com",
    "phone":  "0812321321"
  }
}
```

Response Body ( Failed )
```json
{
  "erros" : "Contact is not found!"
}
```

## Update Contact
Endpoint : PUT /api/contacts/:id

Request Header :
- X-API-TOKEN : token

Request Body
```json
{
  "first_name" : "nizar",
  "last_name" : "fazar",
  "email" : "nizar@gmail.com",
  "contact" : "08123213"
}
```

Response Body ( Success )

```json
{
  "data": {
    "id": 1,
    "first_name": "nizar",
    "email": "nizar@gmail.com",
    "phone":  "0812321321"
  }
}
```

Response Body ( Failed )
```json
{
  "erros" : "firstname must not blank"
}
```
## Remove Contact
Endpoint : DELETE /api/contacts


Request Header :
- X-API-TOKEN : token

Response Body ( Success )

```json
{
  "data": "ok"
}
```

Response Body ( Failed )
```json
{
  "erros" : "Contact is not found"
}
```
## Search Contact
Endpoint : POST /api/contacts

Query Parameter :
- name : string, contact first name or last name, optional
- phone : string, contact phone, optional
- email : string, contact email, optional
- page : number, default 1
- size : number, default 10


Request Header :
- X-API-TOKEN : token

Response Body ( Success )

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "nizar",
      "email": "nizar@gmail.com",
      "phone": "0812321321"
    },
    {
      "id": 2,
      "first_name": "nizar",
      "email": "nizar@gmail.com",
      "phone": "0812321321"
    }
  ],
  "paging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```

Response Body ( Failed )
```json
{
  "erros" : "unatuhroized"
}
```