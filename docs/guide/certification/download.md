# Download certification requests

This example demonstrates the process of downloading certification requests.

## HTTP Request

`GET /v1/accommodations/:id/certifications`

### ROUTE PARAMETERS

| Name | Description             | Type     |      Required      |
|------|-------------------------|----------|:------------------:|
| id   | ID of the accommodation | `string` | :white_check_mark: |

## HTTP Responses

### 200

```json
{
  "message": null,
  "payload": {
    "authentication": "-----BEGIN CERTIFICATE REQUEST-----\nMIIE3TCCAsUCAQAwZTEWMBQGA1UECgwNRnVuayBhbmQgU29uczEXMBUGA1UEYQwO\n...\n-----END CERTIFICATE REQUEST-----",
    "signatory": "-----BEGIN CERTIFICATE REQUEST-----\nMIIE3TCCAsUCAQAwZTEWMBQGA1UECgwNRnVuayBhbmQgU29uczEXMBUGA1UEYQwO\n...\n-----END CERTIFICATE REQUEST-----"
  }
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

### 409

```json
{
  "message": "This accommodation does not own certification."
}
```