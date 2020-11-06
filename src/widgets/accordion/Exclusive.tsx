import Accordion from '@dojo/widgets/accordion';
import { create, tsx } from '@dojo/framework/core/vdom';
import Example from '../../Example';

const factory = create();

export default factory(function Exclusive() {
	return (
		<Example>
			<Accordion exclusive panes={['foo', 'bar']}>
				<div>
					foo content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id purus ipsum. Aenean
					ac purus purus. Nam sollicitudin varius augue, sed lacinia felis tempor in.
				</div>
				<div>
					bar content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id purus ipsum. Aenean
					ac purus purus. Nam sollicitudin varius augue, sed lacinia felis tempor in.
				</div>
			</Accordion>
		</Example>
	);
});
