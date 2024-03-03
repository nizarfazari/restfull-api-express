# User API Spec

## Register User
Endpoint : POST /api/users

Request Body
```json
{
  "username": "nizar",
  "password": "fazari",
  "name": "nizar fazari"
}
```

Response Body ( Success )
```json
{
  "data": {
    "username": "nizar fazari",
    "name": "nizar"
  }
}
```
Respon Body ( Failed )
```json
{
  "errors" : "Username must not blank"
}
```

## Login User
Endpoint : POST /api/users/login

Request Body
```json
{
  "username": "nizar",
  "password": "fazari"
}
```

Response Body ( Success )
```json
{
  "data": {
    "username": "nizar fazari",
    "name": "nizar",
    "token" : "eyzasdasdasdas"
  }
}
```

Respon Body ( Failed )
```json
{
  "errors" : "Username and Password wrong"
}
```

## Get User
Endpoint : GET /api/users/me

Request Header
- X-API-TOKEN : token 

Request Body
```json
{
  "username": "nizar",
  "password": "fazari",
  "name": "nizar fazari"
}
```

Response Body ( Success )
```json
{
  "data": {
    "username": "nizar fazari",
    "name": "nizar"
  }
}

```
Respon Body ( Failed )
```json
{
  "errors" : "Username must not blank"
}
```

## Update User
Endpoint : PATCH /api/users/update

Request Header
- X-API-TOKEN : token

Request Body
```json
{
  "username": "nizar",
  "password": "fazari",
  "name": "nizar fazari"
}
```

Response Body ( Success )
```json
{
  "data": {
    "username": "nizar fazari",
    "name": "nizar"
  }
}

```
Respon Body ( Failed )
```json
{
  "errors" : "Unauthorized"
}
```

## Logout User
Endpoint : POST /api/users

Response Body ( Success )
```json
{
  "data": "Succes"
}
```
Respon Body ( Failed )
```json
{
  "errors" : "Username must not blank"
}
```