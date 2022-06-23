# Deactivate the accommodation

This example demonstrates the process of deactivating your accommodation.

## HTTP Request

`POST /v1/accommodations/:id/deactivate`

### ROUTE PARAMETERS

| Name | Description             | Type     |      Required      |
|------|-------------------------|----------|:------------------:|
| id   | ID of the accommodation | `string` | :white_check_mark: |

## HTTP Responses

### 200

Checkout the detailed [accommodation object](/guide/accommodation/accommodation-object) page.

```json
{
  "payload": {
    "id": "b3e2df02-1c2a-4b12-8058-cf5a9efa07d4",
    "name": "My Awesome Accommodation",
    "providerName": "Awesome provider Ltd",
    "providerTaxNumber": "12345678-1-41",
    "country": "HU",
    "postcode": "M1 1AA",
    "locality": "Budapest",
    "reportingId": "1TJUAIVA",
    "active": false,
    "hasLiveCertification": true,
    "hasPendingCertification": false,
    "expireAt": "2024-06-10T10:36:17+00:00",
    "createdAt": "2022-06-10T10:36:17+00:00"
  },
  "message": null
}
```

### 401

```json
{
  "message": "Unauthenticated."
}
```

### 403

```json
{
  "message": "Unauthorized."
}
```

### 404

```json
{
  "message": "Page not found."
}
```
