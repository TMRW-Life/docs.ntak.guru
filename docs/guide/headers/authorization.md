# Authorization

:::danger Outdated
The authentication will be the same, but the Sandbox/Production server architecture will change.
:::

All the routes are protected via Bearer Authorization.

~~You will get 2 tokens from us. One for the **sandbox** and one for the **production** server.~~

You should specify the access token as a Bearer token in the Authorization header of the request.

## Usage

```text
Authorization: Bearer <your-access-token>
```

For example, when using the Guzzle HTTP library:

```php{9}
use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;

$accessToken = '<your-access-token>';

$client = new Client([
    'base_uri' => 'https://sandbox.ntak.rest',
    RequestOptions::HEADERS => [
        'Authorization' => 'Bearer '.$accessToken,
    ],
]);
```