import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ComponentType, ReactElement, ReactNode } from 'react'

export interface LayoutProps {
	children: ReactNode
}

export type NextPageWithLayout = NextPage & {
	Layout?: (props: LayoutProps) => ReactElement
	requireLogin?: boolean
}

export type NextPageWithLayoutV2<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
  };

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

