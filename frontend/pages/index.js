import Layout from "../components/Layout"
import Articles from "../components/articles";  
import Query from "../components/query";  
import ARTICLES_QUERY from "../apollo/queries/article/articles";
import { withApollo } from '../utils/apollo';

const Home = () => {  
  return (
    <Layout titlePage="Home page">
      <div>
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>Example Blog</h1>
            <Query query={ARTICLES_QUERY}>
              {({ data: { articles } }) => {
                return <Articles articles={articles} />;
              }}
            </Query>
          </div>
        </div>
    </div>
    </Layout>
  );
};

export default withApollo(Home)
