import { bootstrap } from './bootstrap';
import { StorageApi } from './storage';

(async () => {
  try {
    await StorageApi.connect();

    await bootstrap();
    console.info('App started');
  } catch (error) {
    console.error('App start error', error);
  }
})();
