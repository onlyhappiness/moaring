import { CircleUserIcon, CompassIcon, HomeIcon, MessageCircleMoreIcon } from 'lucide-svelte';

const navItems = [
	{ href: '/', icon: HomeIcon, label: '홈' },
	{ href: '/discover', icon: CompassIcon, label: '탐색' },
	// { href: '/create', icon: PlusCircleIcon, isCenter: true },
	{ href: '/chat', icon: MessageCircleMoreIcon, label: '채팅' },
	{ href: '/profile', icon: CircleUserIcon, label: '마이페이지' }
];

export default navItems;
