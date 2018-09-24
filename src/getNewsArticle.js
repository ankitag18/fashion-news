import { request } from 'graphql-request';

const endPoint = 'https://fashionunited.info/graphql/';


const query =
    `
    query NewsArticles($limit: Int,$offset:Int) {
        newsArticles(limit: $limit,offset:$offset) {
            
            fashionunitedItNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedRuNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedCaFrNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedCaNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedDeNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedComNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedInNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedBeNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedClNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedCnNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedUkNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedEsNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedComPeNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            auFashionunitedComNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedBeFrNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedFrNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedCoNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedChNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedInfoNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionweekwebComNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedMxNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedComArNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
            fashionunitedNlNewsArticle{
                id
                title
                url
                imageUrl
                description
                slug
            }
        }
    }
`;

// internationalfashionjobsComNewsArticle{
//     id
//     title
//     url
//     imageUrl
//     description
// }

// category{
//     title
// }

export default function getNewsArticles(variables = {}) {
    return request(endPoint, query, variables)
}