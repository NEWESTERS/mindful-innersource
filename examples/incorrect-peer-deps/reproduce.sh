#!/bin/bash

cd my-library
npm i
npm run build
npm pack
cd ../application
npm i ../my-library/my-library-1.0.0.tgz