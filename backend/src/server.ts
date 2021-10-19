import { serverHttp } from './app';
import { PORT } from './configs/environment';

serverHttp.listen(PORT, () => console.log('Server ON 🚀'));
