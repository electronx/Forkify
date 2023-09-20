import View from './View.js';
import previewView from './previewView.js';
import * as icons from '../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _errorMessage = 'Please add recipe';
  _overlay = document.querySelector('.overlay');
  _window = document.querySelector('.add-recipe-window');
  _btnClose = document.querySelector('.btn--close-modal');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _message = 'Recipe was succesfully uploaded!';

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerCloseModal();
  }

  toggleWidnow(e) {
    // closing manually by click or pressing "Escaoe"
    if (e && (e.type === 'click' || e.key === 'Escape')) {
      this._overlay.classList.toggle('hidden');
      this._window.classList.toggle('hidden');

      // After closing form, reRender add recipe Form for adding more recipes
      if (this._overlay.classList.contains('hidden')) {
        setTimeout(() => {
          this.render([1]);
        }, 500);
      }
    }
    // closing with setTimeout
    if (!e) {
      this._overlay.classList.add('hidden');
      this._window.classList.add('hidden');
      // After closing form, reRender add recipe Form for adding more recipes
      setTimeout(() => {
        this.render([1]);
      }, 500);
    }
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWidnow.bind(this));
  }

  _addHandlerCloseModal() {
    this._btnClose.addEventListener('click', this.toggleWidnow.bind(this));
    window.addEventListener('keydown', this.toggleWidnow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      // Get the data from the form
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }
  _generateMarkup() {
    return `
    <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input
            value=""
            required
            name="title"
            type="text"
            placeholder="Please enter title (e.g Mushroom Pizza)"
          />
          <label>URL</label>
          <input
            value=""
            required
            name="sourceUrl"
            type="text"
            placeholder="Please enter recipe url"
          />
          <label>Image URL</label>
          <input
            value=""
            required
            name="image"
            type="text"
            placeholder="Please enter image url"
          />
          <label>Publisher</label>
          <input
            value=""
            required
            name="publisher"
            type="text"
            placeholder="Please add publisher (e.g Thomas Baum)"
          />
          <label>Prep time</label>
          <input
            value=""
            required
            name="cookingTime"
            type="number"
            placeholder="Please add cooking time in minutes (e.g 25)"
          />
          <label>Servings</label>
          <input
            value=""
            required
            name="servings"
            type="number"
            placeholder="Please add number of servings (e.g 2)"
          />
        </div>
  
        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value=""
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value=""
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=""
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>
  
        <button class="btn upload__btn">
          <svg>
            <use href="src/img/icons.svg#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>`;
  }
}

export default new AddRecipeView();
