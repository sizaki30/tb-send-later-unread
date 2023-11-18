#
# Usage: Execute "sh build.sh" to create an add-on file in the "build" directory.
#
zip -r build/tb-send-later-unread-$(git tag).xpi _locales images src manifest.json
