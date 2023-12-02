#
# Usage: Execute "sh build.sh" to create an add-on file in the "build" directory.
#
VERSION=$(grep '"version"' manifest.json | tr -d ',' | cut -d ':' -f 2 | tr -d '"' | tr -d '[:space:]')
zip -r "build/tb-version-${VERSION}.xpi" images mainVersion manifest.json
