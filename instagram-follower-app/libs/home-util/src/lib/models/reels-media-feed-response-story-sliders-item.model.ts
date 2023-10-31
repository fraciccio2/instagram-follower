import { ReelsMediaFeedResponseSliderSticker } from './reels-media-feed-response-slider-sticker.model';

export interface ReelsMediaFeedResponseStorySlidersItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  slider_sticker: ReelsMediaFeedResponseSliderSticker;
}
