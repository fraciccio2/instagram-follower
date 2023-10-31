import { ReelsMediaFeedResponseQuizSticker } from './reels-media-feed-response-quiz-sticker.model';

export interface ReelsMediaFeedResponseStoryQuizsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  quiz_sticker: ReelsMediaFeedResponseQuizSticker;
}
