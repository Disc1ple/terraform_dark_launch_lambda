# terraform_dark_launch_lambda
A simple terraform script to demonstrate dark launches using a lambda script

# Background 
This borrows heavily from [this article](https://learn.hashicorp.com/terraform/aws/lambda-api-gateway).

# To use this

## First, we bring up the basic environment
```bash
terraform init
terraform apply -auto-approve
``` 
## Dark Launch
The dark launch is based on the name of the training ID used.  If the last digit of the training ID is even,
the response will be "Bonjour". For odd, the response will be "Hello".

