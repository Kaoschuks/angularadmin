import { ErrorHandler, Injectable, Injector, inject } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';
import { Location } from '@angular/common';
import { StorageServices } from './storage.service';
import { NgxSpinnerService } from 'ngx-spinner';
const LOGTAG = '[GlobalErrorHandlerService]';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService 
{
  showsplash: boolean = false;
  loading: boolean = false;
  url:string;
  title:string = 'overview';
  spinner = inject(NgxSpinnerService);
  router = inject(Router);
  private location: Location = inject(Location);
  storage: StorageServices = inject(StorageServices);

  constructor(
  ) {
    this.url = this.location.path();
  }

  setUrlTitle() {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationStart) this.title = event.snapshot.data['title']
    });
  }

  navigate(path: string, subpage: boolean = true) {
    this.router.navigate([path], { replaceUrl: subpage });
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
      console.error(error);
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
    const globalService: GlobalsService =
      this.injector.get<GlobalsService>(GlobalsService);
    console.log(message);
    // await globalService.toastAlert(message);
  }
}