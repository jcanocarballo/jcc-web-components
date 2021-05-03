import { newE2EPage } from '@stencil/core/testing';

describe('jcc-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jcc-modal></jcc-modal>');

    const element = await page.find('jcc-modal');
    expect(element).toHaveClass('hydrated');
  });
});
