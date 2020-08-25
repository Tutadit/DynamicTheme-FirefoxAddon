# Dynamic Theme

 Use a file to dynamically mantain firefox theme

# Dependencies

 * Python 3
 * pyinotify


# Installation

* Download repository to your local directory of choice
* change `path` in `get_firefox_theme.json` to the **absolute** path of `get_firefox_theme.py`
* move `get_firefox_theme.json` to your `mozilla/native-messaging-hosts` directory.
    * See [Manifest Location](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#Manifest_location) for more info
* change `FIREFOX_THEME_PATH` in `get_firefox_theme.py` to the **absolute** path of `firefox_theme.json`

* [Add extention to firefox ](https://addons.mozilla.org/en-CA/firefox/addon/dynamic-theme/)

# Usage

When running the extension firefox's theme is updated when `firefox_theme.json` is changed. 

### Tested on firefox 79 running on arch-linux

Should work on other dists, let me know of any issues