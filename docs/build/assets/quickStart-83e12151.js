import { j as jsx, a as jsxs, F as Fragment } from "./client-entry-3b9b2f18.js";
const frontmatter = void 0;
const toc = [{
  "id": "hello",
  "text": "Hello",
  "depth": 2
}];
const title = "Getting Started";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2",
    p: "p",
    blockquote: "blockquote"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "getting-started",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#getting-started",
        children: "#"
      }), "Getting Started"]
    }), "\n", jsxs(_components.h2, {
      id: "hello",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#hello",
        children: "#"
      }), "Hello"]
    }), "\n", jsx(_components.p, {
      children: "This is my first page."
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "vigor.js is built on top of Vite."
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
export {
  MDXContent as default,
  frontmatter,
  title,
  toc
};
