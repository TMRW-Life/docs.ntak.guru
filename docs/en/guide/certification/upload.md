# Upload certifications

This example demonstrates the process of uploading certifications.

## HTTP Request

`PUT /v1/accommodations/:id/certifications`

### ROUTE PARAMETERS

| Name | Description             | Type     |      Required      |
|------|-------------------------|----------|:------------------:|
| id   | ID of the accommodation | `string` | :white_check_mark: |

### PROPERTIES

| Name           | Description                                        | Type     |      Required      |
|----------------|----------------------------------------------------|----------|:------------------:|
| authentication | The authentication certification provided by NTAK. | `string` | :white_check_mark: |
| signatory      | The signatory certification provided by NTAK.      | `string` | :white_check_mark: |
| reportingId    | The reporting id provided by NTAK.                 | `string` | :white_check_mark: |

## HTTP Responses

### 200

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
    "active": true,
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

### 422

```json
{
  "message": "The authentication certificate field is required. (and 2 more errors)",
  "errors": {
    "authentication": [
      "The authentication certificate field is required.",
      "The authentication certificate and private key do not match."
    ],
    "signatory": [
      "The signatory certificate field is required.",
      "The signatory certificate and private key do not match."
    ],
    "reportingId": [
      "The reporting ID field is required."
    ]
  }
}
```