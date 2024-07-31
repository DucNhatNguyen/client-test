import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { StaticImageData } from 'next/image'
import { ReactElement, ReactNode } from 'react'

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

export type Product = {
	image: string;
	name: string;
	category: string;
	price: number;
	sold: number;
	profit: number;
  };

  export interface Menu {
	id: string;
	link: string;
	title: string;
	order: number;
	childMenus: {
	  id: string;
	  link: string;
	  title: string;
	}[];
  }
  
  export interface Props {
	menus: Menu[];
  }


  export type ProductType = {
	slug: string;
	name: string;
	shoeCategory: string;
	coverImage: StaticImageData | string;
	currentPrice: number;
	previousPrice: number;
	rating: number;
	pieces_sold: number;
	justIn: boolean;
	category: {
		id: string;
		name: string;
		type: number
	}
  };