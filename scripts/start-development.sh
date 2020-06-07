#!/bin/bash

sudo chmod 777 -R db/nosql
sudo chmod 777 -R scripts/postgresql.conf
cd scripts && docker-compose up --build
