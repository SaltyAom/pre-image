## 0.2.0 (September 9, 2019)
* Add the following to `options`:
    - cors
      - Default: false. Enable cross-origin request as 'Anonymous'
    - preferWebP
      - Default: false. Ignore same file format which are not webP, webP are available and supported by client.
* Change `preImage()` to asynchronize function.
* Return as `promise` which resolved once all requested images are loaded.

## 0.1.0 (September 7, 2019)
* Published pre-image with `options`:
    - background
    - delay
* Return data always be true.
* Package size 0.6kB on production (based on preImage.prod.js).