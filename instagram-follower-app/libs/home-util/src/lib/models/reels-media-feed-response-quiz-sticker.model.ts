import { ReelsMediaFeedResponseTalliesItem } from './reels-media-feed-response-tallies-item.model';

export interface ReelsMediaFeedResponseQuizSticker {
  id: string;
  quiz_id: number;
  question: string;
  tallies: ReelsMediaFeedResponseTalliesItem[];
  correct_answer: number;
  viewer_can_answer: boolean;
  finished: boolean;
  text_color: string;
  start_background_color: string;
  end_background_color: string;
  viewer_answer?: number;
}
