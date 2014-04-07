#/bin/sh
#export NODE_DEBUG=sys
forever start --minUptime 1000 --spinSleepTime 1000 -a -l /data/logs/editor_forever.log -e /data/logs/editor_error.log likewedEditor.js 
