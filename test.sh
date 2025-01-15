#!/bin/bash
killall slack
python3 -m electron_inject -r ./slack-when-ready.js -t 10 -d --browser - slack
