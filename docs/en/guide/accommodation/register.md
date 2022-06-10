# Register the accommodation

This example demonstrates the process of registering your accommodation into our service.

## HTTP Request

`POST /v1/accommodations`

### PROPERTIES

| Name              | Description                                                                                                            | Type     |      Required      |
|-------------------|------------------------------------------------------------------------------------------------------------------------|----------|:------------------:|
| name              | The name of the accommodation given in the government"s NTAK system.                                                   | `string` | :white_check_mark: |
| providerName      | Name of the accommodation provider.                                                                                    | `string` | :white_check_mark: |
| providerTaxNumber | Tax number of the accommodation provider.                                                                              | `string` | :white_check_mark: |
| country           | The [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the accommodation. Case-insensitive | `string` | :white_check_mark: |
| postcode          | The ZIP/Postal/Postcode of the accommodation                                                                           | `string` | :white_check_mark: |
| locality          | The locality of the accommodation. E.g.: Budapest                                                                      | `string` | :white_check_mark: |

```json
{
  "name": "My awesome accommodation",
  "providerName": "Awesome provider Ltd",
  "providerTaxNumber": "12345678-1-41",
  "country": "hu",
  "postcode": "M1 1AA",
  "locality": "Budapest"
}
```

## HTTP Responses

### 201

Checkout the detailed [accommodation object](/en/guide/accommodation/accommodation-object) page.

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
    "reportingId": null,
    "active": false,
    "hasLiveCertification": false,
    "hasPendingCertification": false,
    "expireAt": null,
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

### 422

The validation messages can be translated via `Locale` header. [Locale documentation.](/en/guide/headers/locale)

```json
{
  "message": "The name field is required. (and 5 more errors)",
  "errors": {
    "name": [
      "The name field is required."
    ],
    "providerName": [
      "The provider name field is required."
    ],
    "providerTaxNumber": [
      "The provider tax number field is required."
    ],
    "country": [
      "The country field is required.",
      "The country must be 2 characters."
    ],
    "postcode": [
      "The postcode field is required."
    ],
    "locality": [
      "The locality field is required."
    ]
  }
}
```

For example in Hungarian:

```json
{
  "message": "A(z) név megadása kötelező! (and 5 more errors)",
  "errors": {
    "name": [
      "A(z) név megadása kötelező!"
    ],
    "providerName": [
      "A(z) szolágatató neve megadása kötelező!"
    ],
    "providerTaxNumber": [
      "A(z) szolágatató adószáma megadása kötelező!"
    ],
    "country": [
      "A(z) ország megadása kötelező!",
      "A(z) ország hossza 2 karakter kell, hogy legyen!"
    ],
    "postcode": [
      "A(z) irányítószám megadása kötelező!"
    ],
    "locality": [
      "A(z) település megadása kötelező!"
    ]
  }
}
```
