import { ErrorHandler, Injectable, Injector, inject } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';
import { StorageServices } from './storage.service';
import { NgxSpinnerService } from 'ngx-spinner';
const LOGTAG = '[GlobalErrorHandlerService]';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService 
{
  public spinner: NgxSpinnerService = inject(NgxSpinnerService)
  public router: Router = inject(Router)
  public storage: StorageServices = inject(StorageServices)

  showsplash: boolean = false;
  loading: boolean = false;
  title:string = 'overview';

  navigate(path: string, subpage: boolean = true) {
    this.router.navigate([path], { replaceUrl: subpage });
  }

  setUrlTitle() {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationStart) this.title = event.snapshot.data['title']
    });
  }

  async initializeApp() {
    try {
      this.setUrlTitle();
      this.showsplash = true
      setTimeout(() => {
        this.showsplash = false
      }, 5000);
    } catch (error) {
      console.log(error)
    }
  }
}


@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private injector: Injector) {}

  public handleError(error: unknown): void {
    this.handle(error);
  }

  private async handle(error: unknown): Promise<void> {
    try {
      const message = this.getMessageFromUnknownError(error);
      await this.showErrorAlert(message);
    } catch (errorHandlerError) {
      console.error(`${LOGTAG} Internal exception:`, errorHandlerError);
    }
  }

  private getMessageFromUnknownError(error: unknown): string {
    let message = 'An unknown error has occurred.';
    if (error instanceof Object && 'rejection' in error) {
      error = (error as any).rejection;
    }
    if (error instanceof Error && error.message) {
      message = error.message;
    }
    return message;
  }

  private async showErrorAlert(message: string): Promise<void> {
    const globalService: GlobalsService = this.injector.get<GlobalsService>(GlobalsService);
    console.log(message);
    // await globalService.toastAlert(message);
  }
}