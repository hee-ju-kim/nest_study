1. pm2 실행
2. pm2 start app.js
3. sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ubuntu --hp /home/ubuntu
4. pm2 save