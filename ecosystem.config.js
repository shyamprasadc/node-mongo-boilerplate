module.exports = {
  apps: [
    {
      name: 'NODE-BOILERPLATE - MAIN',
      script: './bin/www',
      node_args: '--max_old_space_size=4096',
      instances: '1',
      exec_mode: 'cluster',
    },
    {
      name: 'NODE-BOILERPLATE - JOBS',
      script: './jobs/index',
      node_args: '--max_old_space_size=4096',
      exec_mode: 'fork',
    },
  ],
};
