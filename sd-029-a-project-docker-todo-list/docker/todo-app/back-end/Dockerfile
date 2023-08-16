FROM node:16-alpine
WORKDIR /app/back-end
ADD node_modules.tar.gz .
EXPOSE 3001
COPY . .
ENTRYPOINT ["npm"]
CMD ["start"]