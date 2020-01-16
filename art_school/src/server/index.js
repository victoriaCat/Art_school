import express from 'express';
import cors from 'cors';
import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../app/Routes.js';

const app = express();

app.use(cors());

app.use(express.static('public'));

app.get('*', (req, res, next) => {
    const context = {};
    const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
            <Routes />
        </StaticRouter>
    );

    res.send(
        `<!DOCTYPE html>
      <html>
        <head>
            <meta charset='utf-8' />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>SSR with React</title>
        </head>
         <body>
            <div id='root'>${markup}</div>
         </body>
         <script src="/bundle.js" defer></script>
      </html>`
    );
});

app.listen(3000, () => {
    console.log('Server is listening on port: 3000');
});