import { ReelsMediaFeedResponseCountdown_sticker } from './reels-media-feed-response-countdown_sticker.model';

export interface ReelsMediaFeedResponseStoryCountdownsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  countdown_sticker: ReelsMediaFeedResponseCountdown_sticker;
}
