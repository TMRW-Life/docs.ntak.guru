# Generate certifications

This example demonstrates the process of generation certifications.

## HTTP Request

`POST /v1/accommodations/:id/certifications`

### ROUTE PARAMETERS

| Name | Description             | Type     |      Required      |
|------|-------------------------|----------|:------------------:|
| id   | ID of the accommodation | `string` | :white_check_mark: |

## HTTP Responses

### 204

::: info Security
We are not providing any information about the private keys.
:::

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