# Authorization

All the routes are protected via Bearer Authorization.

You will get 2 tokens from us. One for the **sandbox** and one for the **production** server.

You should specify the access token as a Bearer token in the Authorization header of the request.

## Usage

```text
Authorization: Bearer 9e034cb2-1cbe-4088-b805-c1c00f1a6800|U7jHF2RwGmJ3esYGhK06eMDxj20xc2XNNGAjX5s9
```

For example, when using the Guzzle HTTP library:

```php{10}
use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;

$accessToken = '9e034cb2-1cbe-4088-b805-c1c00f1a6800|U7jHF2RwGmJ3esYGhK06eMDxj20xc2XNNGAjX5s9';

$client = new Client([
    'base_uri' => 'https://sandbox.ntak.rest',
    RequestOptions::HEADERS => [
        'Accept' => 'application/json',
        'Authorization' => 'Bearer '.$accessToken,
    ],
]);
```