#!/bin/bash
docker stop covid-app_covid-app_1 \
	&& docker rm covid-app_covid-app_1 \
	&& docker rmi covid-app_covid-app \
	&& docker-compose up -d;