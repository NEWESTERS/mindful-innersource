#!/bin/bash

cd libraries/lib2
npm ci
npm pack
cd ../../app
npm start