# ShelterTech.org Non-Profit Informational Site

## Requirements
* node `^4.5.0`
* yarn `^0.17.0` or npm `^3.0.0`

```bash
$ yarn install     # Install project dependencies
$ yarn start       # Compile and launch (same as `npm start`)
$ yarn deploy:prod # Build deployable production build to /dist Copy contents to production directory
```

## Deploy to Live Environment

We use a AWS S3 bucket to host this webpage. These are the steps to deploy changes to production

### Preconditions

Access to AWS bucket, contact the Technical Team if you need this, you will need to configure aws your first time.

Install the aws-cli tools. For OSX:
```bash
brew install awscli
```
Then configure it, you'll need to input these values.
```bash
aws configure
```
AWS Key ID     : {{KEY_ID}}
AWS Secret Key : {{SECRET_KEY}}
Default Region : us-east-01
### Deployment
Use the Bucket Name you desire below.
```bash
$ yarn deploy:prod && aws s3 sync dist/ s3://{{BUCKET_NAME}}
```

Production 
```
Bucket Name: www.sheltertech.org
```
Staging
``` 
Bucket Name: staging.sheltertech.org
```
