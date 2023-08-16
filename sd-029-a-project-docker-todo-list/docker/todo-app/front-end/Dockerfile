FROM node:16-alpine
WORKDIR /app/front-end
ADD node_modules.tar.gz .
EXPOSE 3000
COPY . .
ENTRYPOINT ["npm"]
CMD ["start"]
