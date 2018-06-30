module.exports = {
  apps: [
    {
      name: "react-sass-pm2-production-app",
      env: {
        PORT: 3000,
        NODE_ENV: "production"
      }
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-xx-xxx-xxx-xx.us-east-2.compute.amazonaws.com",
      key: "~/.ssh/AWS-EC2-INSTANCE-LIVE.pem",
      ref: "origin/master",
      repo: "git@github.com:BalasubramaniM/react-sass-pm2-production-app.git",
      path: "/home/ubuntu/react-app",
      "post-deploy":
        "npm install && npm run build && sudo cp -r build/* /var/www/react-sass-pm2-production-app.in/"
    }
  }
};
