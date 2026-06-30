import { render, screen } from '@testing-library/react';
import Post from './Posts';

const BASE_PROPS = {
    author: 'Alice Johnson',
    content: 'Just had an amazing hike through the mountains!',
    likes: 142,
    avatar: 'https://i.pravatar.cc/150?img=1',
};

describe('Post — basic rendering with required props', () => {
    it('displays the author name', () => {
        render(<Post {...BASE_PROPS} />);

        expect(screen.getByText(BASE_PROPS.author)).toBeInTheDocument();
    });

    it('displays the post content', () => {
        render(<Post {...BASE_PROPS} />);

        expect(screen.getByText(BASE_PROPS.content)).toBeInTheDocument();
    });

    it('displays the likes count', () => {
        render(<Post {...BASE_PROPS} />);

        expect(screen.getByText(String(BASE_PROPS.likes))).toBeInTheDocument();
    });

    it('renders the avatar image with the correct src', () => {
        render(<Post {...BASE_PROPS} />);

        const avatar = screen.getByRole('img');

        expect(avatar).toHaveAttribute('src', BASE_PROPS.avatar);
    });

    it('renders the avatar image with an accessible alt text containing the author name', () => {
        render(<Post {...BASE_PROPS} />);

        const avatar = screen.getByRole('img');

        expect(avatar.alt).toContain(BASE_PROPS.author);
    });

    it('renders without crashing when likes is zero', () => {
        render(<Post {...BASE_PROPS} likes={0} />);

        expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('renders without crashing when content is an empty string', () => {
        const { container } = render(<Post {...BASE_PROPS} content="" />);

        expect(container).toBeInTheDocument();
    });

    it('displays different author and content when different props are provided', () => {
        const altProps = {
            author: 'Bob Martinez',
            content: 'Finally finished my home renovation project.',
            likes: 89,
            avatar: 'https://i.pravatar.cc/150?img=2',
        };

        render(<Post {...altProps} />);

        expect(screen.getByText(altProps.author)).toBeInTheDocument();
        expect(screen.getByText(altProps.content)).toBeInTheDocument();
        expect(screen.getByText(String(altProps.likes))).toBeInTheDocument();
    });
});