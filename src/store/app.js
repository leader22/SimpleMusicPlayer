import {
  observable,
  // computed,
} from 'mobx';
import {
  TABS,
} from '../const';

class AppStore {
  @observable selectedTab$ = TABS.PLAYING;
}

export default (new AppStore());
