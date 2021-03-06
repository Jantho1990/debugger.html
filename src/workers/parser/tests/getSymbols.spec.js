/* eslint max-nested-callbacks: ["error", 4]*/

import { formatSymbols } from "../utils/formatSymbols";
import { getSource, getOriginalSource } from "./helpers";
import cases from "jest-in-case";

cases(
  "Parser.getSymbols",
  ({ name, file, original, type }) => {
    // console.log(formatSymbols(getSource(file, type)));
    const source = original
      ? getOriginalSource(file, type)
      : getSource(file, type);
    expect(formatSymbols(source)).toMatchSnapshot();
  },
  [
    { name: "es6", file: "es6", original: true },
    { name: "func", file: "func", original: true },
    { name: "function names", file: "functionNames", original: true },
    { name: "math", file: "math" },
    { name: "proto", file: "proto" },
    { name: "class", file: "class", original: true },
    { name: "var", file: "var" },
    { name: "expression", file: "expression" },
    { name: "allSymbols", file: "allSymbols" },
    { name: "call sites", file: "call-sites" },
    {
      name: "finds symbols in an html file",
      file: "parseScriptTags",
      type: "html"
    },
    { name: "component", file: "component", original: true },
    { name: "react component", file: "frameworks/component", original: true },
    { name: "flow", file: "flow", original: true },
    { name: "jsx", file: "jsx", original: true },
    { name: "destruct", file: "destructuring" }
  ]
);
