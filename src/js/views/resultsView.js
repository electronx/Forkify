import View from './View.js';
import * as icons from '../../img/icons.svg';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'We could not find that dish. Please try another one!';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();

{
  /* <div class="preview__user-generated">
<svg>
  <use href="${icons}#icon-user"></use>
</svg>
</div> */
}
