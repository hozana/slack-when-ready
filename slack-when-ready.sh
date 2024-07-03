#!/bin/bash
python -m electron_inject -r slack-when-ready.js - slack '--remote-allow-origins=http://localhost:50453'
