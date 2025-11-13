// ===== User & Profile Types =====
export type UserId = string;
export type ProfileId = string;

export type Gender = 'male' | 'female' | 'other';
export type VerificationStatus = 'verified' | 'pending' | 'unverified';

export interface User {
  id: UserId;
  email: string;
  phoneNumber?: string;
  phoneVerified: boolean;
  locationVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastActiveAt: Date;
}

export interface Profile {
  id: ProfileId;
  userId: UserId;
  nickname: string;
  age: number;
  gender: Gender;
  bio: string;
  photos: string[]; // Array of photo URLs
  location: {
    city: string;
    district: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  interests: string[];
  lifestyle: {
    drinking?: 'never' | 'occasionally' | 'regularly';
    smoking?: 'never' | 'occasionally' | 'regularly';
    exercise?: 'never' | 'occasionally' | 'regularly';
  };
  trustLevel: 'bronze' | 'silver' | 'gold';
  matchPreferences: MatchPreferences;
  createdAt: Date;
  updatedAt: Date;
}

export interface MatchPreferences {
  matchTypes: MatchType[];
  ageRange: {
    min: number;
    max: number;
  };
  maxDistance: number; // in kilometers
  genderPreference?: Gender[];
  interests?: string[];
}

// ===== Match Types =====
export type MatchType = 'peer' | 'local' | 'romance';

export type MatchStatus = 'pending' | 'matched' | 'rejected' | 'expired';

export interface Match {
  id: string;
  userId1: UserId;
  userId2: UserId;
  type: MatchType;
  status: MatchStatus;
  createdAt: Date;
  updatedAt: Date;
  expiresAt?: Date;
}

export interface Like {
  id: string;
  fromUserId: UserId;
  toUserId: UserId;
  type: MatchType;
  isSuperLike: boolean;
  createdAt: Date;
}

// ===== Chat & Message Types =====
export type MessageId = string;
export type ConversationId = string;

export interface Conversation {
  id: ConversationId;
  matchId: string;
  participants: UserId[];
  lastMessage?: Message;
  unreadCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export type MessageType = 'text' | 'image' | 'sticker' | 'system';

export interface Message {
  id: MessageId;
  conversationId: ConversationId;
  senderId: UserId;
  type: MessageType;
  content: string;
  imageUrl?: string;
  isRead: boolean;
  createdAt: Date;
}

// ===== Feed & Community Types =====
export type PostId = string;
export type GroupId = string;

export type PostCategory = 'story' | 'gathering' | 'question' | 'announcement';

export interface Post {
  id: PostId;
  authorId: UserId;
  category: PostCategory;
  title: string;
  content: string;
  images?: string[];
  tags: string[];
  location?: {
    city: string;
    district: string;
  };
  likes: number;
  commentCount: number;
  visibility: 'public' | 'local' | 'private';
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: string;
  postId: PostId;
  authorId: UserId;
  content: string;
  parentCommentId?: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Group {
  id: GroupId;
  name: string;
  description: string;
  category: string;
  coverImage?: string;
  creatorId: UserId;
  memberIds: UserId[];
  maxMembers?: number;
  location?: {
    city: string;
    district: string;
  };
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// ===== Safety & Moderation Types =====
export type ReportId = string;
export type ReportReason = 
  | 'inappropriate_content'
  | 'harassment'
  | 'spam'
  | 'fake_profile'
  | 'underage'
  | 'other';

export type ReportStatus = 'pending' | 'under_review' | 'resolved' | 'dismissed';

export interface Report {
  id: ReportId;
  reporterId: UserId;
  reportedUserId?: UserId;
  reportedPostId?: PostId;
  reportedMessageId?: MessageId;
  reason: ReportReason;
  description: string;
  status: ReportStatus;
  screenshots?: string[];
  createdAt: Date;
  updatedAt: Date;
  resolvedAt?: Date;
  resolvedBy?: UserId;
  resolution?: string;
}

export interface Block {
  id: string;
  blockerId: UserId;
  blockedUserId: UserId;
  createdAt: Date;
}

// ===== User Roles & Permissions =====
export type UserRole = 'guest' | 'member' | 'premium' | 'moderator' | 'admin';

export interface Permission {
  role: UserRole;
  canViewProfiles: boolean;
  canLike: boolean;
  canChat: boolean;
  canPost: boolean;
  canComment: boolean;
  canCreateGroup: boolean;
  canModerate: boolean;
  canAccessAdmin: boolean;
  dailyLikeLimit?: number;
  canUseAdvancedFilters: boolean;
  canBoostProfile: boolean;
}

// ===== UI State Types =====
export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

export interface PaginationState {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export interface FilterState {
  matchType?: MatchType;
  distance?: number;
  ageRange?: {
    min: number;
    max: number;
  };
  interests?: string[];
}

// ===== API Response Types =====
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  meta?: {
    pagination?: PaginationState;
  };
}

// ===== Analytics & Events Types =====
export type EventType =
  | 'profile_view'
  | 'like_sent'
  | 'match_created'
  | 'message_sent'
  | 'post_created'
  | 'group_joined';

export interface AnalyticsEvent {
  type: EventType;
  userId: UserId;
  timestamp: Date;
  metadata?: Record<string, any>;
}

