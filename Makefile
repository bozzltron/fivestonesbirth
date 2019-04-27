deploy:
	#aws s3 cp dist/ s3://fivestoneshealth.com --profile boz-dev --recursive
	rsync -urltv --delete -e ssh ./dist fivest36@fivestoneshealth.com:/public_html