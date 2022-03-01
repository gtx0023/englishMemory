import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { App } from 'Vue';

export function elementConfig(app: App): void {
  app.use(ElementPlus);
}
