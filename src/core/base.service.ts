import { Subscription } from 'rxjs';

export abstract class BaseService {
  protected loadSubscription: Subscription | undefined;
  protected createSubscription: Subscription | undefined;
  protected changeSubscription: Subscription | undefined;
  protected deleteSubscription: Subscription | undefined;

  onDestroy(): void {
    this.loadSubscription?.unsubscribe();
    this.createSubscription?.unsubscribe();
    this.changeSubscription?.unsubscribe();
    this.deleteSubscription?.unsubscribe();
  }
}
