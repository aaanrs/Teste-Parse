import { render } from '@testing-library/react';
import Post from './Posts';

const DEFAULT_PROPS = {
    username: 'testuser',
    image: 'https://example.com/image.jpg',
    caption: 'Test caption',
    likes: 42,
};

const renderPost = (props = {}) =>
    render(<Post {...DEFAULT_PROPS} {...props} />);

describe('Posts — valid and accessible HTML structure', () => {
    it('wraps action icons inside a <ul> element', () => {
        const { container } = renderPost();

        const lists = container.querySelectorAll('ul');
        expect(lists.length).toBeGreaterThan(0);

        const actionIcons = container.querySelectorAll(
            'ul .fa-heart, ul .fa-location-arrow, ul .fa-comment, ul .fa-ellipsis-h'
        );
        expect(actionIcons.length).toBeGreaterThan(0);
    });

    it('does not render any <li> element that is a direct child of a <div>', () => {
        const { container } = renderPost();

        const divs = container.querySelectorAll('div');
        divs.forEach((div) => {
            const directLiChildren = Array.from(div.children).filter(
                (child) => child.tagName === 'LI'
            );
            expect(directLiChildren).toHaveLength(0);
        });
    });

    it('places every <li> inside a <ul> or <ol>', () => {
        const { container } = renderPost();

        const allListItems = container.querySelectorAll('li');
        allListItems.forEach((li) => {
            const parent = li.parentElement;
            expect(['UL', 'OL']).toContain(parent.tagName);
        });
    });

    it('renders all four action icon list items inside the action list', () => {
        const { container } = renderPost();

        const ACTION_ICON_SELECTORS = [
            '.fa-heart',
            '.fa-location-arrow',
            '.fa-comment',
            '.fa-ellipsis-h',
        ];

        ACTION_ICON_SELECTORS.forEach((selector) => {
            const icon = container.querySelector(selector);
            expect(icon).not.toBeNull();

            const li = icon.closest('li');
            expect(li).not.toBeNull();

            const list = li.parentElement;
            expect(['UL', 'OL']).toContain(list.tagName);
        });
    });

    it('renders the correct number of action icon items in the action list', () => {
        const { container } = renderPost();

        const ACTION_ICON_COUNT = 4;

        const actionLists = Array.from(container.querySelectorAll('ul, ol')).filter(
            (list) => list.querySelector('.fa-heart')
        );

        expect(actionLists).toHaveLength(1);
        expect(actionLists[0].querySelectorAll('li')).toHaveLength(ACTION_ICON_COUNT);
    });
});