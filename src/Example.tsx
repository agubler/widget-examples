import { create } from '@dojo/framework/core/vdom';

const factory = create();

export default factory(function Example({ children }) {
	return children();
});
