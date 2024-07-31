import { createProxyMiddleware } from 'http-proxy-middleware';
import type {NextApiRequest, NextApiResponse} from 'next'

export const config = {
    api:{
        bodyParser: false,
        externalResolver: true,
    }
}
const proxy = createProxyMiddleware({
    target: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    changeOrigin: true,
    pathRewrite: { "^/graphql": "/" },

  });

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  req.headers.cookie = '';
    proxy(req, res, (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Proxy error');
        }
      });
}