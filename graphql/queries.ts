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