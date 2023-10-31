import {
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ReelsMediaFeedResponseItem } from 'home-util';
import { HttpClient } from '@angular/common/http';
import { endLoader, LoaderFacade } from 'loader-data-access';
import { finalize } from 'rxjs';

@Component({
  selector: 'home-story-viewer-ui',
  templateUrl: './home-story-viewer-ui.component.html',
  styleUrls: ['./home-story-viewer-ui.component.scss'],
})
export class HomeStoryViewerUiComponent implements OnChanges {
  @Input() activeIndex: number = 0;
  @Input() stories: ReelsMediaFeedResponseItem[] | undefined | null;

  urlToUse: string = '';
  loadedUrl = false;

  private endpoint = 'http://localhost:3000';
  private http = inject(HttpClient);
  private loaderFacade = inject(LoaderFacade);

  ngOnChanges(changes: SimpleChanges) {
    if (changes && this.stories) {
      if (this.stories[this.activeIndex]?.video_versions) {
        this.loaderFacade.startLoader();
        this.loadedUrl = false;
        this.http
          .get(`${this.endpoint}/proxy-video`, {
            params: {
              videoUrl: this.stories[this.activeIndex].video_versions[0].url,
            },
            responseType: 'blob',
          })
          .pipe(
            endLoader(this.loaderFacade),
            finalize(() => (this.loadedUrl = true))
          )
          .subscribe((url) => (this.urlToUse = URL.createObjectURL(url)));
      } else {
        this.loaderFacade.startLoader();
        this.loadedUrl = false;
        this.http
          .get(`${this.endpoint}/proxy-image`, {
            params: {
              imageUrl:
                this.stories[this.activeIndex].image_versions2.candidates[0]
                  .url,
            },
            responseType: 'blob',
          })
          .pipe(
            endLoader(this.loaderFacade),
            finalize(() => (this.loadedUrl = true))
          )
          .subscribe((url) => (this.urlToUse = URL.createObjectURL(url)));
      }
    }
  }
}
