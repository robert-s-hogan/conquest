import awsExports from "./aws-exports";

const amplifyConfig = {
  aws_project_region:
    process.env.NEXT_PUBLIC_AWS_PROJECT_REGION || awsExports.aws_project_region,
  aws_appsync_graphqlEndpoint:
    process.env.NEXT_PUBLIC_AWS_APPSYNC_GRAPHQLENDPOINT ||
    awsExports.aws_appsync_graphqlEndpoint,
  aws_appsync_region:
    process.env.AWS_APPSYNC_REGION || awsExports.aws_appsync_region,
  aws_appsync_authenticationType:
    process.env.AWS_APPSYNC_AUTHENTICATION_TYPE ||
    awsExports.aws_appsync_authenticationType,
  aws_appsync_apiKey:
    process.env.AWS_APPSYNC_APIKEY || awsExports.aws_appsync_apiKey,
  aws_cognito_identity_pool_id:
    process.env.AWS_COGNITO_IDENTITY_POOL_ID ||
    awsExports.aws_cognito_identity_pool_id,
  aws_cognito_region:
    process.env.AWS_COGNITO_REGION || awsExports.aws_cognito_region,
  aws_user_pools_id:
    process.env.AWS_USER_POOLS_ID || awsExports.aws_user_pools_id,
  aws_user_pools_web_client_id:
    process.env.AWS_USER_POOLS_WEB_CLIENT_ID ||
    awsExports.aws_user_pools_web_client_id,
};

export default amplifyConfig;
