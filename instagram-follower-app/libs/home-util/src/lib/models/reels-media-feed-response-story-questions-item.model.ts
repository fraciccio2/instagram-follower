import { ReelsMediaFeedResponseQuestionSticker } from './reels-media-feed-response-question-sticker.model';

export interface ReelsMediaFeedResponseStoryQuestionsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  question_sticker: ReelsMediaFeedResponseQuestionSticker;
}
