import { newSpecPage } from '@stencil/core/testing';
import { JccPersonalCard } from '../jcc-personal-card';

describe('jcc-personal-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JccPersonalCard],
      html: `<jcc-personal-card></jcc-personal-card>`,
    });
    expect(page.root).toEqualHtml(`
      <jcc-personal-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jcc-personal-card>
    `);
  });
});
