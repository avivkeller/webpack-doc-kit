import { MarkdownTheme, MarkdownThemeContext } from 'typedoc-plugin-markdown';
import helpers from './helpers/index.mjs';
import partials from './partials/index.mjs';

export class DocKitTheme extends MarkdownTheme {
  getRenderContext(page) {
    this.application.options.setValue('hidePageHeader', true);
    this.application.options.setValue('hideBreadcrumbs', true);
    this.application.options.setValue('propertiesFormat', 'table');
    return new DocKitThemeContext(this, page, this.application.options);
  }
}

export class DocKitThemeContext extends MarkdownThemeContext {
  helpers = helpers(this);
  partials = partials(this);
}

/** @param {import('typedoc').Application} app */
export function load(app) {
  app.renderer.defineTheme('doc-kit', DocKitTheme);
}