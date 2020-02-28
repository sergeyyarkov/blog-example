import gql from 'graphql-tag'

const ARTICLE_QUERY = gql`

    query Article($id: ID!) {
        article(id: $id) {
            id
            title
            content
            image {
                url
            }
            category {
                id
                name
            }
            published_at
        }
    }

`

export default ARTICLE_QUERY