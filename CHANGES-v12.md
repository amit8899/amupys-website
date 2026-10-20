# Amupys Website v12

## Homepage button fix

The previous build still had legacy classes on the homepage `Download APK` buttons:
- `apk-home-btn`
- `site-action-btn`
- `site-action-primary`

Older CSS targeted `apk-home-btn` with `!important`, which overrode the newer shared button design and kept the APK button black.

## Fix
- Removed all legacy APK-specific button classes from the homepage.
- Homepage `Download APK` and `Google Play` now both use exactly:
  `action-btn home-action-btn`
- Removed the unnecessary homepage APK-specific CSS override.

## Result
Both homepage actions now use the same:
- background
- border
- corner radius
- height
- typography
- icon sizing
- hover/focus behavior

## Behavior preserved
- Card body -> dedicated app page
- Download APK -> dedicated app page at `#versions`
- Google Play -> Play Store
