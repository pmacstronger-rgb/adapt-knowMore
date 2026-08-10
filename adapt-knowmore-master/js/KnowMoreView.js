import ComponentView from 'core/js/views/componentView';

class KnowMoreView extends ComponentView {
  postRender() {
    this.setReadyStatus();
    this.setupInviewCompletion();
  }
}

KnowMoreView.template = 'knowMore.jsx';

export default KnowMoreView;