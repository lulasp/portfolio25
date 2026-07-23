/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require('react');
const { LangProvider } = require('./src/i18n');

exports.wrapRootElement = ({ element }) => React.createElement(LangProvider, null, element);
