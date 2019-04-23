import { newE2EPage } from '@stencil/core/testing';

describe('ion-multi-picker', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ion-multi-picker></ion-multi-picker>');
    const element = await page.find('ion-multi-picker');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<ion-multi-picker></ion-multi-picker>');
    const component = await page.find('ion-multi-picker');
    const element = await page.find('ion-multi-picker >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
