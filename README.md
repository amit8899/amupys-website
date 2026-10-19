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


## Fixed asset locations

Main page now uses the actual uploaded files:
- Beats icon: `assets/apps/beats/icon.png`
- Beats preview: `assets/apps/beats/screenshots/beats1.jpg`
- GetMp3 icon: `assets/apps/getmp3/icon.png`
- GetMp3 preview: `assets/apps/getmp3/screenshots/Screenshot00001.png`
- Social icon: `assets/apps/social/social_logo_512.jpg`
- Social preview: `assets/apps/social/screenshots/Screenshot00001.png`

To change the preview image on the main page, edit the corresponding `<img src="...">` in `index.html`.

The individual app screenshot galleries are controlled from the `screenshots` arrays in `app-data.js`.

## Privacy policy links

The three Google Sites URLs are now configured as `privacyUrl` in `app-data.js`.
The `Privacy Policy` button on each app detail page reads that field.

## Favicon

The website favicon is `assets/brand/favicon.png`, generated from the Amupys organization logo.


## v5 homepage changes

- Removed the large Amupys logo from the right side of the hero.
- The hero now shows Social - Media Downloader as the featured app.
- App cards on the homepage are fully clickable and open the dedicated app page.
- The old `View app` button was removed.
- Homepage cards now show `Download APK` and `Google Play` buttons.
- APK buttons are placeholders until you add real URLs.


## v6 Google Play badge
All Google Play buttons now use the official badge image from Wikimedia Commons:
https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg

The whole badge remains clickable and links to each app's Play Store listing.


## v10 - Dedicated app hero image

The right side of each dedicated app page now uses a landscape feature graphic instead of repeating the app icon.

Recommended size:
- 1024 x 500 px
- JPG or PNG
- landscape orientation

Default paths:
- Beats: `assets/apps/beats/landscape/feature-graphic.jpg`
- GetMp3: `assets/apps/getmp3/landscape/feature-graphic.jpg`
- Social: `assets/apps/social/landscape/feature-graphic.jpg`

After adding the files, the app pages load them automatically from `heroImage` in `app-data.js`.

If you use different filenames, update the relevant `heroImage` value in `app-data.js`.
