module.exports = {
  apps: [
    {
      name: "app",
      script: "npx",
      interpreter: "none",
      // args: "serve -p 5000 -T"
      args: "serve -s build"

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      // args: "one two",
      // exec_mode: "cluster",
      // instances: 2,
      // autorestart: true,
      // watch: false,
      // max_memory_restart: "1G",
      // env: {
      //   NODE_ENV: "development",
      //   TEST_VAR: "this is my test var",
      //   WEB_PUSH_CONTACT: "mailto:tech@coinvestr.com",
      //   PUBLIC_VAPID_KEY:
      //     "BNfDaGHc5DGwjvZjVMHRIsiTnubsj2VCnHobbvIZA87RS3grAehcUusMx8euLC6lvGGMw9Fsq-DrpcHlKKHGjRw",
      //   PRIVATE_VAPID_KEY: "_RBtiBepwL7-FZf_S1W3WVPsk82LawF_qvPH2TCCt4w"
      // },
      // env_production: {
      //   NODE_ENV: "production"
      // }
    }
    // {
    //   name: "ah",
    //   script: "src/server/services/actionHandler.js",

    //   // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    //   args: "one two",
    //   exec_mode: "cluster",
    //   instances: 1,
    //   autorestart: true,
    //   watch: false,
    //   max_memory_restart: "1G",
    //   env: {
    //     NODE_ENV: "development"
    //   },
    //   env_production: {
    //     NODE_ENV: "production"
    //   }
    // },
    // {
    //   name: "ticker",
    //   script: "src/server/ticker.js",

    //   // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    //   args: "one two",
    //   exec_mode: "cluster",
    //   instances: 1,
    //   autorestart: true,
    //   watch: false,
    //   max_memory_restart: "1G",
    //   env: {
    //     NODE_ENV: "development"
    //   },
    //   env_production: {
    //     NODE_ENV: "production"
    //   }
    // },
    // {
    //   name: "ticker",
    //   script: "src/server/sockets.js",

    //   // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    //   args: "one two",
    //   exec_mode: "cluster",
    //   instances: 1,
    //   autorestart: true,
    //   watch: false,
    //   max_memory_restart: "1G",
    //   env: {
    //     NODE_ENV: "development"
    //   },
    //   env_production: {
    //     NODE_ENV: "production"
    //   }
    // }
  ],

  deploy: {
    production: {
      user: "node",
      host: "212.83.163.1",
      ref: "origin/master",
      repo: "git@github.com:repo.git",
      path: "/var/www/production",
      "post-deploy": "npm install && pm2 reload ecosystem.config.js --env prod"
    }
  }
};
