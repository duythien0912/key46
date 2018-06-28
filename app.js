import { GraphQLServer } from 'graphql-yoga';
import express from 'express';
import path from 'path';

import schema from "./schema/schema";
import './mongooseConnection';

const host = process.env.HOST || 8000;

const server = new GraphQLServer({ schema });


if (process.env.NODE_ENV === 'production') {

 server.express.use(express.static('client/dist'));

 server.express.get('/*', (req, res) => {
 	res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
 });
 
}



const options = {
  port: host,
  endpoint: '/api/graphql',
  subscriptions: '/api/subscriptions',
  playground: '/playground',
}

server.start(options, ({ port }) =>
  console.log(
    `🚀 🚀 🚀  Server ready at ${port} 🚀 🚀 🚀`,
  ),
);