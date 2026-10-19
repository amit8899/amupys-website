# Amupys Website v3

## Changes
- Uses the Amupys organisation logo in header and homepage hero.
- Better mobile layout for app icon + application name.
- Added each app's existing Google Sites website as an Official website button.
- Google Play buttons include a Play icon.
- Each application page has a screenshot gallery.
- Keeps latest + 5 previous APK release slots.

## Add screenshots
1. Put files in one of these folders:
   - assets/apps/beats/screenshots/
   - assets/apps/getmp3/screenshots/
   - assets/apps/social/screenshots/
2. Open app-data.js.
3. Add file paths to the app's `screenshots` array. Example:

```js
screenshots: [
  "../assets/apps/social/screenshots/home.png",
  "../assets/apps/social/screenshots/day-night.png",
  "../assets/apps/social/screenshots/download-manager.png"
],
```

## Replace app icons
Put your real app icons under `assets/apps/<app>/` and update the `icon:` field in app-data.js.

## APK versions
Update only the `versions` array in app-data.js. There are 6 slots per app.


## Privacy link correction
The three Google Sites URLs are app privacy-policy pages, not app websites. The app detail buttons now say `Privacy Policy`.

## Website privacy policy
`privacy.html` is a separate Amupys website-wide privacy policy adapted from the app-specific policies.
