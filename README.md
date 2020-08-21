# Dynamic Theme

 Use a file to mantain firefox theme

# Tested on firefox linux
# Dependency

 * Python 3
 * pyinotify

# Installation

* change `path` in `get_firefox_theme.json` to the **absolute** path of `get_firefox_theme.py`
* move `get_firefox_theme.json` to your `mozilla/native-messaging-hosts` directory.
* change `FIREFOX_THEME_PATH` in `get_firefox_theme.py` to the **absolute** path of `firefox_theme.json`

* add the extension to firefox, will run at start
# Usage

When running the extension firefox's theme is updated when `firefox_theme.json` is changed




