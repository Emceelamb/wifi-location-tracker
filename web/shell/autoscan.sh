#!/bin/bash


echo "start scan"
/usr/local/bin/scan.sh & sleep 10; /usr/local/bin/killscan.sh

