import { createProxyMiddleware } from 'http-proxy-middleware';
import type {NextApiRequest, NextApiResponse} from 'next'

export const config = {
    api:{
        bodyParser: false,
        externalResolver: true,
    }
}
const proxy = createProxyMiddleware({
    target: 'http://localhost:5037/graphql',
    changeOrigin: true,
    pathRewrite: {
      '/graphql': '/',
    },
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