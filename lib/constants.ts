import type { MatchType, UserRole } from '@/types';

// ===== Match Configuration =====
export const MATCH_TYPES: { value: MatchType; label: string; icon: string }[] = [
  { value: 'peer', label: '또래 친구', icon: '👥' },
  { value: 'local', label: '동네 친구', icon: '🏘️' },
  { value: 'romance', label: '이성 친구', icon: '💕' },
];

export const DEFAULT_LIKE_LIMITS: Record<UserRole, number> = {
  guest: 0,
  member: 20,
  premium: 100,
  moderator: 999,
  admin: 999,
};

export const DEFAULT_MAX_DISTANCE = 5; // km
export const MAX_DISTANCE_OPTIONS = [1, 3, 5, 10, 20, 50];

// ===== Age Configuration =====
export const MIN_AGE = 19;
export const MAX_AGE = 60;
export const DEFAULT_AGE_RANGE = { min: 19, max: 35 };

// ===== Interest Tags =====
export const INTEREST_CATEGORIES = {
  운동: ['러닝', '헬스', '요가', '필라테스', '등산', '수영', '테니스', '골프', '클라이밍'],
  문화예술: ['영화', '음악', '공연', '전시', '뮤지컬', '사진', '그림', '독서'],
  음식: ['맛집탐방', '요리', '베이킹', '카페투어', '와인', '전통주', '비건'],
  여행: ['국내여행', '해외여행', '캠핑', '차박', '바다', '산', '섬'],
  취미: ['게임', '보드게임', '댄스', '노래', '악기', '반려동물', '식물키우기'],
  자기계발: ['외국어', '독서', '스터디', '사이드프로젝트', '창업', '투자'],
  소셜: ['술', '와인', '맥주', '카페', '수다', '파티'],
};

export const ALL_INTERESTS = Object.values(INTEREST_CATEGORIES).flat();

// ===== Lifestyle Options =====
export const LIFESTYLE_OPTIONS = {
  drinking: [
    { value: 'never' as const, label: '안 마셔요' },
    { value: 'occasionally' as const, label: '가끔 마셔요' },
    { value: 'regularly' as const, label: '자주 마셔요' },
  ],
  smoking: [
    { value: 'never' as const, label: '안 피워요' },
    { value: 'occasionally' as const, label: '가끔 피워요' },
    { value: 'regularly' as const, label: '자주 피워요' },
  ],
  exercise: [
    { value: 'never' as const, label: '안 해요' },
    { value: 'occasionally' as const, label: '가끔 해요' },
    { value: 'regularly' as const, label: '자주 해요' },
  ],
};

// ===== Trust Levels =====
export const TRUST_LEVELS = {
  bronze: {
    label: '브론즈',
    minPoints: 0,
    color: 'trust-bronze',
    benefits: ['기본 매칭 기능'],
  },
  silver: {
    label: '실버',
    minPoints: 100,
    color: 'trust-silver',
    benefits: ['기본 매칭 기능', '프로필 우선 노출'],
  },
  gold: {
    label: '골드',
    minPoints: 500,
    color: 'trust-gold',
    benefits: ['기본 매칭 기능', '프로필 우선 노출', '무제한 좋아요', '고급 필터'],
  },
};

// ===== Report Reasons =====
export const REPORT_REASONS = [
  { value: 'inappropriate_content', label: '부적절한 콘텐츠' },
  { value: 'harassment', label: '괴롭힘' },
  { value: 'spam', label: '스팸' },
  { value: 'fake_profile', label: '가짜 프로필' },
  { value: 'underage', label: '미성년자' },
  { value: 'other', label: '기타' },
] as const;

// ===== Post Categories =====
export const POST_CATEGORIES = [
  { value: 'story', label: '동네 이야기', icon: '💬' },
  { value: 'gathering', label: '모임', icon: '👥' },
  { value: 'question', label: '질문', icon: '❓' },
  { value: 'announcement', label: '공지', icon: '📢' },
] as const;

// ===== Navigation Routes =====
export const ROUTES = {
  home: '/',
  discover: '/discover',
  matching: '/matching',
  chat: '/chat',
  feed: '/feed',
  profile: '/profile',
  settings: '/settings',
  admin: '/admin',
  onboarding: '/onboarding',
} as const;

// ===== Validation Rules =====
export const VALIDATION = {
  nickname: {
    minLength: 2,
    maxLength: 12,
    pattern: /^[가-힣a-zA-Z0-9_]+$/,
  },
  bio: {
    maxLength: 200,
  },
  postTitle: {
    minLength: 2,
    maxLength: 100,
  },
  postContent: {
    minLength: 10,
    maxLength: 5000,
  },
  message: {
    maxLength: 1000,
  },
  groupName: {
    minLength: 2,
    maxLength: 30,
  },
  groupDescription: {
    maxLength: 500,
  },
} as const;

// ===== File Upload Limits =====
export const FILE_UPLOAD = {
  maxProfilePhotos: 6,
  maxPostImages: 5,
  maxFileSize: 5 * 1024 * 1024, // 5MB
  acceptedImageTypes: ['image/jpeg', 'image/png', 'image/webp'],
} as const;

// ===== Pagination =====
export const PAGINATION = {
  defaultPageSize: 20,
  matchesPageSize: 10,
  chatListPageSize: 30,
  feedPageSize: 15,
} as const;

// ===== Timeouts & Intervals =====
export const TIMEOUTS = {
  toastDuration: 3000,
  matchExpiration: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
  typingIndicatorDelay: 1000,
  debounceDelay: 300,
  autoSaveDelay: 2000,
} as const;

// ===== Role Permissions =====
export const ROLE_PERMISSIONS = {
  guest: {
    canViewProfiles: false,
    canLike: false,
    canChat: false,
    canPost: false,
    canComment: false,
    canCreateGroup: false,
    canModerate: false,
    canAccessAdmin: false,
  },
  member: {
    canViewProfiles: true,
    canLike: true,
    canChat: true,
    canPost: true,
    canComment: true,
    canCreateGroup: true,
    canModerate: false,
    canAccessAdmin: false,
    dailyLikeLimit: 20,
    canUseAdvancedFilters: false,
    canBoostProfile: false,
  },
  premium: {
    canViewProfiles: true,
    canLike: true,
    canChat: true,
    canPost: true,
    canComment: true,
    canCreateGroup: true,
    canModerate: false,
    canAccessAdmin: false,
    dailyLikeLimit: 100,
    canUseAdvancedFilters: true,
    canBoostProfile: true,
  },
  moderator: {
    canViewProfiles: true,
    canLike: true,
    canChat: true,
    canPost: true,
    canComment: true,
    canCreateGroup: true,
    canModerate: true,
    canAccessAdmin: true,
    canUseAdvancedFilters: true,
    canBoostProfile: true,
  },
  admin: {
    canViewProfiles: true,
    canLike: true,
    canChat: true,
    canPost: true,
    canComment: true,
    canCreateGroup: true,
    canModerate: true,
    canAccessAdmin: true,
    canUseAdvancedFilters: true,
    canBoostProfile: true,
  },
} as const;

// ===== Quick Message Templates =====
export const QUICK_MESSAGES = [
  '안녕하세요! 반갑습니다 😊',
  '프로필 보고 인사드려요!',
  '관심사가 비슷해서 연락드렸어요',
  '같이 활동하면 좋을 것 같아요!',
  '커피 한잔 하실래요? ☕',
] as const;

// ===== System Messages =====
export const SYSTEM_MESSAGES = {
  matchCreated: '매칭이 성사되었습니다! 🎉',
  matchExpired: '매칭 기한이 만료되었습니다.',
  userBlocked: '사용자를 차단했습니다.',
  userReported: '신고가 접수되었습니다. 검토 후 조치하겠습니다.',
  messageDeleted: '메시지가 삭제되었습니다.',
  profileUpdated: '프로필이 업데이트되었습니다.',
  likeSent: '좋아요를 보냈습니다! 💕',
  dailyLimitReached: '오늘의 좋아요 횟수를 모두 사용했습니다.',
} as const;

// ===== Error Messages =====
export const ERROR_MESSAGES = {
  networkError: '네트워크 연결을 확인해주세요.',
  serverError: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  unauthorized: '로그인이 필요합니다.',
  forbidden: '권한이 없습니다.',
  notFound: '요청하신 정보를 찾을 수 없습니다.',
  validationError: '입력 정보를 다시 확인해주세요.',
  uploadError: '파일 업로드에 실패했습니다.',
  sessionExpired: '세션이 만료되었습니다. 다시 로그인해주세요.',
} as const;

// ===== Local Storage Keys =====
export const STORAGE_KEYS = {
  authToken: 'moaring_auth_token',
  userId: 'moaring_user_id',
  theme: 'moaring_theme',
  onboardingCompleted: 'moaring_onboarding_completed',
  lastViewedProfile: 'moaring_last_viewed_profile',
  draftPost: 'moaring_draft_post',
} as const;

