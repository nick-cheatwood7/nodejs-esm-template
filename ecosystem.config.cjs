module.exports = {
  apps: [
    {
      name: 'server',
      script: './dist/index.js',
      cwd: './',
      watch: false,
      ignore_watch: ['node_modules', 'dist'],
      max_memory_restart: '150M',
      autorestart: true,
      max_restarts: 10,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      },
      env_test: {
        NODE_ENV: 'test'
      }
    }
  ]
};
