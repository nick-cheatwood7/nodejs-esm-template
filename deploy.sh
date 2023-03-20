#!/bin/bash
clear;
echo 'Starting NodeJS ESM API deploy script...';
sleep 2;

# Pull down updated code
echo '🏗 Performing git pull';
sleep 2;
git reset --hard;
git pull;

# Install dependencies
echo '☁️ Installing dependencies';
sleep 2;
pnpm install;

# Build app
echo '📦 Building Node app...'
rm -rf dist;
pnpm build;
sleep 2;

# Restart PM2\
echo '🚀 Restarting PM2';
pm2 restart ecosystem.config.cjs --env production;

# Done
echo '🎉 Done!';
exit 0;