import components from 'core/js/components';
import KnowMoreView from './KnowMoreView';
import KnowMoreModel from './KnowMoreModel';

export default components.register('knowMore', {
  model: KnowMoreModel,
  view: KnowMoreView
});