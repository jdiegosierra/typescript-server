#!/bin/bash

sudo chmod 777 -R db/nosql
cd scripts && docker-compose up --build
