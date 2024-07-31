import httpProxy from 'http-proxy'
import type {NextApiRequest, NextApiResponse} from 'next'

const API_URL = 'http://localhost:5037/graphql'
const proxy = httpProxy.createProxyServer()

// Make sure that we don't parse JSON bodies on this route:
export const config = {
	api: {
		bodyParser: false,
	},
}

export default (req: NextApiRequest, res: NextApiResponse<any>) => {
	return new Promise<void>((resolve, reject) => {
		proxy.web(req, res, { target: API_URL, changeOrigin: true }, (err) => {
            if (err) {
				return reject(err)
			}
			resolve()
		})
	})
}