1. sudo apt-get install nginx
2. cd /etc/nginx/sites-available
3. sudo vi [ 도메인명 ]
4. 설정 정보 입력
5. sudo ln -s /etc/nginx/sites-available/[3에서 만든 파일] /etc/nginx/sites-enabled/
6. sudo nginx -t
7. sudo systemctl reload nginx.service 
8. apt-get install python3-certbot-nginx
9. sudo certbot --nginx  -d [ 도메인명 ]
10. crontab -e
11. 0 0 1 */3 *  certbot renew --renew-hook="sudo systemctl restart nginx" 추가
12. crontab -l
13. sudo service cron restart