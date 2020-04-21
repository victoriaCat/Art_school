import React from 'react';
import '@babel/polyfill';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {matchRoutes, renderRoutes} from 'react-router-config';
import express from 'express';
import {Provider} from 'react-redux';
import serialize from 'serialize-javascript';
import Routes from './Routes';
import {store} from './store';
import {assetsByChunkName} from '../dist/public/stats.json';

const app = express();

app.use(express.static('dist/public'));

const renderer = (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <>
                    {renderRoutes(Routes)}
                </>
            </StaticRouter>
        </Provider>
    );
    return `<!DOCTYPE html>
            <html lang="en">
                  <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <link rel="shortcut icon" href="/src/assets/images/favicon.ico" type="image/x-icon">
                    <link rel="stylesheet" href="/${assetsByChunkName.main[0]}">
                    <title>Арт-школа Пушкарёвой</title>
                    <!-- Global site tag (gtag.js) - Google Analytics -->
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-133928645-1"></script>
                    <script type="text/javascript">
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());

                          gtag('config', 'UA-133928645-1');
                    </script>
                    <!-- Yandex.Metrika counter -->
                    <script type="text/javascript" >
                        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                         m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                        ym(52247416, "init", {
                        id:52247416,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                      });
                    </script> 
                    <!-- /Yandex.Metrika counter -->
                    <!--<link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet">-->
                  </head>
                  <body>
                     <div id="root">${content}</div>
                     <script>
                        window.__PRELOADED_STATE__ = ${serialize(store.getState()).replace(/</g, '\\u003c')}
                     </script>
                     <script src="/${assetsByChunkName.main[1]}"></script>
                  </body>
            </html>`
    };

app.get('*', (req, res) => {
    // const params = req.params[0].split('/');
    // const id = params[2];
    const id = req.originalUrl;

    const routes = matchRoutes(Routes, req.path);

    const promises = routes
        .map(({route}) => {
            return route.loadData ? route.loadData(store, id) : null;
        })
        .map(promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve);
                });
            }
            return null;
        });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        if (context.notFound) {
            res.status(404);
        }

        res.send(content);
    });
});

app.listen(3000, () => {
    console.log('Server is listening on port: 3000');
});

