PYINSTALLER = wine ~/.wine/drive_c/Program\ Files/Python39/Scripts/pyinstaller.exe
PIPENV = pipenv
WINE_PYTHON = wine ~/.wine/drive_c/Program\ Files/Python39/python.exe
ENTRY_SCRIPT = slack-when-ready
OUTPUT_DIR = dist

all: build

setup-wine-python:
	wget https://www.python.org/ftp/python/3.9.9/python-3.9.9-amd64.exe -O python-installer.exe
	WINEPREFIX=~/.wine wine python-installer.exe /quiet InstallAllUsers=1 PrependPath=1
	rm -f python-installer.exe

install-deps:
	$(WINE_PYTHON) -m pip install pyinstaller
	$(WINE_PYTHON) -m pip install requests
	$(WINE_PYTHON) -m pip install websocket-client



build:
	$(PYINSTALLER) --add-data slack-when-ready.js:. --add-data electron_inject/__main__.py:electron_inject --log-level=DEBUG --debug=all --hidden-import websocket --hidden-import requests --hidden-import electron_inject --icon=slack.ico --noconsole --onefile $(ENTRY_SCRIPT)
#	$(PYINSTALLER) --add-data slack-when-ready.js:. --onefile $(ENTRY_SCRIPT)

clean:
	rm -rf build $(OUTPUT_DIR) *.spec

full-build: clean setup-wine-python install-deps build

