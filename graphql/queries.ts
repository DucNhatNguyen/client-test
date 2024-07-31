import { gql } from '@apollo/client';

export const GET_MENUS = gql`
    query {
        menus {
            id
            link
            title
            order
            childMenus {
                id
                link
                title
            }
        }
    }
`

export const GET_PRODUCTS = gql`
    query {
        products {
            items {
            categoryId
            coverImage
            currentPrice
            id
            justIn
            name
            overview
            piecesSold
            previousPrice
            rating
                category {
                    id
                    name
                    type
                }
            }
        }
    }
`