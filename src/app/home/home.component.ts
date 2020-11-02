import {Component} from '@angular/core';
import {TrackInfoCard} from '../cards/track-info-card/track-info-card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public hasResult = false;
  public hasError = false;
  public isLoading = false;
  public loadingText = '';
  public errorText = '';
  public objectInfo: TrackInfoCard | undefined;

  receiverLoading(event: string): void {
    console.log('receiverLoading:');
    console.log(event);
    this.loadingText = event;
    this.showLoadingCard();
  }

  receiverResultError(event: string): void {
    console.log('receiverResultError:');
    console.log(event);
    this.errorText = event;
    this.showErrorCard();
  }

  receiverResultSuccess(event: TrackInfoCard): void {
    console.log('receiverResultSuccess:');
    console.log(event);
    this.objectInfo = event;
    this.showSuccessCard();
  }

  showLoadingCard(): void {
    this.hasResult = false;
    this.hasError = false;
    this.isLoading = true;
    this.errorText = '';
  }

  showErrorCard(): void {
    this.hasResult = false;
    this.hasError = true;
    this.isLoading = false;
    this.loadingText = '';
  }

  showSuccessCard(): void {
    this.hasResult = true;
    this.hasError = false;
    this.isLoading = false;
    this.errorText = '';
    this.loadingText = '';
  }

}
