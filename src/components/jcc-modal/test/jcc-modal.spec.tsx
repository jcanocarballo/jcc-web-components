import { newSpecPage } from '@stencil/core/testing';
import { JccModal } from '../jcc-modal';

describe('jcc-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JccModal],
      html: `<jcc-modal></jcc-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <jcc-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jcc-modal>
    `);
  });
});
