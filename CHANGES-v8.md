# Amupys Website v8

## Changes
- Added a `Download APK` button beside the Google Play button on every dedicated app page.
- The app-page APK button scrolls smoothly to the APK/version archive.
- Homepage `Download APK` buttons now open the corresponding app page directly at `#versions`.
- Google Play buttons remain unchanged.
- Added scroll offset so the versions heading is not hidden behind the sticky header.

## UX decision
The homepage does not start the latest APK download immediately.
Instead it opens the app's version archive so users can see:
- the latest version
- up to five previous versions
- version/date/size metadata

This keeps older releases discoverable while still making APK access one click away.
