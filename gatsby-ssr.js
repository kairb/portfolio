/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import ReactDOM from 'react-dom';

export { wrapRootElement } from './wrapRootElement';

export function replaceHydrateFunction() {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback);
  };
}