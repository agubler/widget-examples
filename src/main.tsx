import Registry from '@dojo/framework/core/Registry';
import renderer, { tsx } from '@dojo/framework/core/vdom';
import { registerRouterInjector } from '@dojo/framework/routing/RouterInjector';
import './main.css';

import App from './App';
import routes from './routes';

const registry = new Registry();
registerRouterInjector(routes, registry);

const r = renderer(() => <App />);
r.mount({ registry });
