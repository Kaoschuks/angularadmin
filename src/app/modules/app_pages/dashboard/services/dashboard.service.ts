import { Injectable, inject } from '@angular/core';
import { GlobalsService } from '../../../../shared';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  globals = inject(GlobalsService)

  constructor() { }
}
