#!bin/bash

sqlite3 -separator , sqlite.db ".import ./csv/user.csv user"
