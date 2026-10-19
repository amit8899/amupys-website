# Amupys Website v7 Changes

## UI changes
- Aligned homepage Download APK and Google Play badge controls to the same height and baseline.
- App detail pages now show only the Google Play badge in the primary action area.
- Removed app-specific Privacy Policy button from the app hero action row.

## Production cleanup
- Removed developer-facing instructions from visible website pages.
- App screenshot copy is now user-facing.
- APK archive only renders versions that have real version metadata and an APK URL; UPDATE_ME rows remain in configuration but are hidden from production.
- Reworded support implementation note for end users.
- Replaced Terms placeholder wording with production-safe general terms copy.

## Testing
- Check homepage button alignment on desktop and mobile.
- Verify each app card still opens its detail page when clicking outside action buttons.
- Verify Google Play badges open the correct Play Store listing.
- Verify app pages show no Privacy Policy action next to Google Play.
- Verify APK archive stays empty until real URLs/version values are configured.
