import { ReelsMediaFeedResponseTalliesItem } from './reels-media-feed-response-tallies-item.model';

export interface ReelsMediaFeedResponsePollSticker {
  id: string;
  poll_id: number;
  question: string;
  tallies: ReelsMediaFeedResponseTalliesItem[];
  promotion_tallies: null;
  viewer_can_vote: boolean;
  viewer_vote?: number;
  is_shared_result: boolean;
  finished: boolean;
}
