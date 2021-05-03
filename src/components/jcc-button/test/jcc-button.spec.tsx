import { newSpecPage } from '@stencil/core/testing';
import { JccButton } from '../jcc-button';

describe('jcc-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JccButton],
      html: `<jcc-button></jcc-button>`,
    });
    expect(page.root).toEqualHtml(`
      <jcc-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jcc-button>
    `);
  });
});
