import { render } from '@testing-library/react';
import Posts from './Posts';

describe('Posts — semantic HTML structure for icon list', () => {
  let container;

  beforeEach(() => {
    ({ container } = render(<Posts />));
  });

  it('renders a .bottom_part element', () => {
    const bottomPart = container.querySelector('.bottom_part');
    expect(bottomPart).not.toBeNull();
  });

  it('renders a <ul> inside .bottom_part', () => {
    const bottomPart = container.querySelector('.bottom_part');
    const ul = bottomPart && bottomPart.querySelector('ul');
    expect(ul).not.toBeNull();
  });

  it('renders <li> elements only inside a <ul> or <ol> within .bottom_part', () => {
    const bottomPart = container.querySelector('.bottom_part');
    expect(bottomPart).not.toBeNull();

    const allLiElements = bottomPart.querySelectorAll('li');
    expect(allLiElements.length).toBeGreaterThan(0);

    allLiElements.forEach((li) => {
      const parent = li.parentElement;
      const parentTag = parent && parent.tagName.toLowerCase();
      expect(['ul', 'ol']).toContain(parentTag);
    });
  });

  it('does not contain any <li> that is a direct child of .bottom_part', () => {
    const bottomPart = container.querySelector('.bottom_part');
    expect(bottomPart).not.toBeNull();

    const directLiChildren = Array.from(bottomPart.children).filter(
      (el) => el.tagName.toLowerCase() === 'li'
    );

    expect(directLiChildren).toHaveLength(0);
  });

  it('all icon <i> elements inside .bottom_part are wrapped within <li> elements', () => {
    const bottomPart = container.querySelector('.bottom_part');
    expect(bottomPart).not.toBeNull();

    const iElements = bottomPart.querySelectorAll('i');
    expect(iElements.length).toBeGreaterThan(0);

    iElements.forEach((icon) => {
      const closestLi = icon.closest('li');
      expect(closestLi).not.toBeNull();
    });
  });

  it('the <ul> containing icon <li> elements is a descendant of .bottom_part', () => {
    const bottomPart = container.querySelector('.bottom_part');
    expect(bottomPart).not.toBeNull();

    const ul = bottomPart.querySelector('ul');
    expect(ul).not.toBeNull();

    const liItems = ul.querySelectorAll('li');
    expect(liItems.length).toBeGreaterThan(0);
  });

  it('no <li> exists outside of a list container anywhere in the rendered output', () => {
    const allLiElements = container.querySelectorAll('li');

    allLiElements.forEach((li) => {
      const parent = li.parentElement;
      const parentTag = parent && parent.tagName.toLowerCase();
      expect(['ul', 'ol']).toContain(parentTag);
    });
  });
});