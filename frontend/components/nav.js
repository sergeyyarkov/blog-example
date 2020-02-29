import Link from "next/link"  
import Query from "./query";  
import CATEGORIES_QUERY from "../apollo/queries/category/categories.js";
import { withApollo } from "../utils/apollo";

const Nav = () => {  
  return (
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div>
              <nav className="uk-container uk-container-large uk-navbar-container uk-navbar" data-uk-navbar>
                <div className="uk-navbar-left">
                  <ul className="uk-navbar-nav">
                    <li>
                      <Link href="/">
                        <a>Example Blog</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    {categories.map((category, i) => {
                      return (
                        <li key={category.id}>
                          <Link href='/categories/[id]' as={`/categories/${category.id}`}>
                            <a className="uk-link-reset">{category.name}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
  );
};

export default Nav 