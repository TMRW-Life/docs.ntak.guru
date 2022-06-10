# Accept

With this header you can enforce the JSON response type. Otherwise, our API router will throw HTTP 404 response.

## Usage

```text
Accept: application/json
```

For example, when using the Guzzle HTTP library:

```php{7}
use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;

$client = new Client([
    'base_uri' => 'https://sandbox.ntak.rest',
    RequestOptions::HEADERS => [
        'Accept' => 'application/json',
    ],
]);
```