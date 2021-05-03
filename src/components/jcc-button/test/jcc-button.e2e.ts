import { newE2EPage } from '@stencil/core/testing';

describe('jcc-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jcc-button></jcc-button>');

    const element = await page.find('jcc-button');
    expect(element).toHaveClass('hydrated');
  });
});
