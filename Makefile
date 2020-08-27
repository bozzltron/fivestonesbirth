deploy:
	#aws s3 cp dist/ s3://fivestoneshealth.com --profile boz-dev --recursive
	rsync -urltv --delete -e ssh ./dist fivest36@fivestoneshealth.com:/public_html

sync:
	rsync -r -a -v -e "ssh -p2222" --delete `pwd`/dist/ fivest36@fivestoneshealth.com:/home/fivest36/public_html/

ssh:
	ssh fivest36@fivestoneshealth.com -p 2222

webpack:
	node_modules/.bin/webpack

run:
	npm run start:dev