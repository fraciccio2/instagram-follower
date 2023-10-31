import { ReelsMediaFeedResponsePollSticker } from './reels-media-feed-response-poll-sticker.model';

export interface ReelsMediaFeedResponseStoryPollsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  poll_sticker: ReelsMediaFeedResponsePollSticker;
}
