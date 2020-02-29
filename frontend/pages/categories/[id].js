import CATEGORY_ARTICLES_QUERY from "../../apollo/queries/category/articles";
import { useRouter } from "next/router";   
import { withApollo } from "../../utils/apollo";

import Articles from "../../components/articles";  
import Query from "../../components/query"; 
import Layout from "../../components/Layout"

const Category = () => {  
  const router = useRouter();

  return (
    <Layout titlePage="Categories">
      <Query query={CATEGORY_ARTICLES_QUERY} id={router.query.id}>
        {({ data: { category } }) => {
          return (
            <div>
              <div className="uk-section">
                <div className="uk-container uk-container-large">
                  <h1>{category.name}</h1>
                  <Articles articles={category.articles} />
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    </Layout>
  );
};

export default withApollo(Category)