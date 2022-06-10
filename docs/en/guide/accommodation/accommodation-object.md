# The accommodation object

Every time when you do the following actions, we respond with the latest accommodation object:

 - [Register](/en/guide/accommodation/register)
 - [Retrieve](/en/guide/accommodation/retrieve)
 - Update
 - Activate
 - Deactivate

## Top level response

| Name                      | Description                                                                        | Type               |
|---------------------------|------------------------------------------------------------------------------------|--------------------|
| message                   | All of our responses contains a message property. In this case it's always `null`. | `null`             |
| payload                   | The object that contains the accommodation data.                                   | `object`           |

## The content of the top level `payload`

A.K.A. the accommodation.

| Name                    | Description                                                                                                    | Type               |
|-------------------------|----------------------------------------------------------------------------------------------------------------|--------------------|
| id                      | The unique ID of the accommodation.                                                                            | `string`           |
| name                    | The name of the accommodation.                                                                                 | `string`           |
| providerName            | This name of the accommodation provider.                                                                       | `string`           |
| providerTaxNumber       | This tax number of the accommodation provider.                                                                 | `string`           |
| country                 | The country of the accommodation. [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. | `string`           |
| postcode                | This postcode/postal/zip of the accommodation.                                                                 | `string`           |
| locality                | This locality of the accommodation.                                                                            | `string`           |
| reportingId             | The reporting id of the accommodation. Provided by NTAK.                                                       | `string` or `null` |
| active                  | It defines the accommodation actively sending the reports to NTAK.                                             | `boolean`          |
| hasLiveCertification    | It defines the accommodation has verified certification.                                                       | `boolean`          |
| hasPendingCertification | It defines the accommodation has certification that needs to be verified.                                      | `boolean`          |
| expireAt                | The expiration date of the verified certification. Format: `Y-m-d\TH:i:sP` UTC                                 | `string` or `null` |
| createdAt               | The date when was the accommodation registered into NTAK.REST Format: `Y-m-d\TH:i:sP` UTC                      | `string`           |

Example response:

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

