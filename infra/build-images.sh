cd ../auth && docker buildx build --platform linux/amd64 -t 190097/auth:latest --push . 
cd ../client && docker buildx build --platform linux/amd64 -t 190097/client:latest --push . 
cd ../expiration && docker buildx build --platform linux/amd64 -t 190097/expiration:latest --push . 
cd ../orders && docker buildx build --platform linux/amd64 -t 190097/orders:latest --push . 
cd ../payments && docker buildx build --platform linux/amd64 -t 190097/payments:latest --push . 
cd ../products && docker buildx build --platform linux/amd64 -t 190097/products:latest --push . 