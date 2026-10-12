
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t yatindora/k8s-backend-multi-arch \
  --push .
  