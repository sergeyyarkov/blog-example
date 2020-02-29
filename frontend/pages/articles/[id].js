import ReactMarkdown from "react-markdown";  
import Moment from "react-moment";  
import ARTICLE_QUERY from "../../apollo/queries/article/article";
import { useRouter } from "next/router";    
import { withApollo } from "../../utils/apollo";

import Query from "../../components/query";
import Layout from "../../components/Layout"

const Article = () => {  
  const router = useRouter();

  return (
      <Query query={ARTICLE_QUERY} id={router.query.id}>
        {({ data: { article } }) => {
          return (
            <Layout titlePage={article.title}>
              <div>
                <div
                  id="banner"
                  className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                  data-src={process.env.API_URL + article.image.url}
                  data-srcset={process.env.API_URL + article.image.url}
                  data-uk-img
                >
                  <h1>{article.title}</h1>
                </div>

                <div className="uk-section">
                  <div className="uk-container uk-container-small">
                    <ReactMarkdown source={article.content} />
                    <p>
                      <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                    </p>
                  </div>
                </div>
              </div>
            </Layout>
          );
        }}
      </Query>
  );
};

export default withApollo(Article); 