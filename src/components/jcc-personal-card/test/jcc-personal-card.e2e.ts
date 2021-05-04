import { newE2EPage } from '@stencil/core/testing';

describe('jcc-personal-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jcc-personal-card></jcc-personal-card>');

    const element = await page.find('jcc-personal-card');
    expect(element).toHaveClass('hydrated');
  });
});
