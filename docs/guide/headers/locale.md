# Locale

With this header you can choose the language of our response.

The value of this header is case-insensitive.

The default language is `en` if the `Locale` header is not provided or not supported.

::: warning Limitation
Our responses are translated, but the response from NTAK is not. There is no way to specify the language for those responses. \
Unfortunately, you will only see them in Hungarian or in English, because it is inconsistent.
:::

## Usage

```text
Locale: en
```

For example, when using the Guzzle HTTP library:

```php{7}
use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;

$client = new Client([
    'base_uri' => 'https://sandbox.ntak.rest',
    RequestOptions::HEADERS => [
        'Locale' => 'en',
    ],
]);
```

## Available languages

 - de
 - en
 - es
 - fr
 - hu
 - it
 - pl
 - sl