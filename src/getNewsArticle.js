import { request } from 'graphql-request';

const endPoint = 'https://fashionunited.info/graphql/';

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
            }
            fashionunitedRuNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedCaFrNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedCaNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedDeNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedComNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedInNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedBeNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedClNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedCnNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedUkNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedEsNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedComPeNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            auFashionunitedComNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedBeFrNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedFrNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedCoNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedChNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedInfoNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionweekwebComNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedMxNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedComArNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
            fashionunitedNlNewsArticle{
                id
                title
                url
                imageUrl
                description
            }
        }
    }
`;

export default function getNewsArticles(variables = {}) {
    return request(endPoint, query, variables)
}