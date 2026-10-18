# Amupys website

This is a simple static website for the Amupys Android apps.

## Files
- `index.html` - main website
- `styles.css` - responsive styling
- `app.js` - APK download URL configuration

## Add APK links
Open `app.js` and replace the empty values:

```js
const APK_URLS = {
  beats: "https://downloads.example.com/beats-latest.apk",
  getmp3: "https://downloads.example.com/getmp3-latest.apk",
  social: "https://downloads.example.com/social-latest.apk"
};
```

## Recommended free hosting
Use Cloudflare Pages for the website.

1. Create a Git repository containing these files.
2. In Cloudflare Dashboard, open Workers & Pages.
3. Create a Pages project and connect the repository.
4. This site needs no build command. Set the output directory to the repository root.
5. Cloudflare will provide a `*.pages.dev` URL.
6. Optionally connect a custom domain later.

## APK hosting
Do not put large APKs directly into Cloudflare Pages because individual Pages assets have a size limit.

A good setup is:
- Website: Cloudflare Pages
- APK files: Cloudflare R2 Standard storage
- Optional custom APK host: `downloads.yourdomain.com`

If you do not want to set up R2 initially, you can host APK release files elsewhere and paste those direct URLs in `app.js`.

## Important Android signing note
If you expect a website-downloaded APK to update an app originally installed from Google Play,
the APK must be signed with the same app-signing certificate as the installed application.
Verify your Play App Signing setup before publishing direct APK downloads.
