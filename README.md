
# Modifies the tables of rollbar

# Installing

1. Clone this repo (Chrome doesn't seem to allow you to add arbitrary .crx files to your own browser)
1. Open chrome extensions `chrome://extensions/`
2. Enable developer mode if you haven't already
3. Click `Load unpacked`, navigate to this directory
4. Hit the reload icon on the extensions menu for this extension
5. Go to rollbar and test it works

# Known Issues

- Throws errors due to running on every page, but `host_permissions` in the manifest should be preventing this
- Cannot resize horizontally -- has to do with table width but it has not been a big enough issue to work with yet
