# Dynamic Theme

 Use a file to dynamically mantain firefox theme

### Tested on firefox linux
# Dependencies

 * Python 3
 * pyinotify


# Installation

* change `path` in `get_firefox_theme.json` to the **absolute** path of `get_firefox_theme.py`
* move `get_firefox_theme.json` to your `mozilla/native-messaging-hosts` directory.
* change `FIREFOX_THEME_PATH` in `get_firefox_theme.py` to the **absolute** path of `firefox_theme.json`

* [Add extention to firefox ](https://addons.mozilla.org/en-CA/firefox/addon/dynamic-theme/)

# Usage

When running the extension firefox's theme is updated when `firefox_theme.json` is changed




