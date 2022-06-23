# Delete pending certification

This example demonstrates the process of deleting pending certifications.

:::info
Sometimes NTAK will not accept the certification request (even if it was recently created).
In this case you need to delete the current pending certification and create a new one.
:::

## HTTP Request

`DELETE /v1/accommodations/:id/certifications`

### ROUTE PARAMETERS

| Name | Description             | Type     |      Required      |
|------|-------------------------|----------|:------------------:|
| id   | ID of the accommodation | `string` | :white_check_mark: |

## HTTP Responses

### 204

::: info Success
There is nothing we can show.
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