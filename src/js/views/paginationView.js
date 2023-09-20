import * as icons from '../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    
    const curPage = this._data.page;

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1)
      return `
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>${curPage + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
    `;

    // Page1, there are no other pages

    // Middle curPage
    if (curPage > 1 && curPage < numPages) {
      return `
        <button data-goto="${
          curPage - 1
        }"class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>${curPage - 1}</span>
        </button>
        <button data-goto="${
          curPage + 1
        }"class="btn--inline pagination__btn--next">
            <span>${curPage + 1}</span>
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
      `;
    }
    // Last curPage
    if (curPage === numPages && numPages > 1) {
      return `
          <button data-goto="${
            curPage - 1
          }" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>${curPage - 1}</span>
          </button>
        `;
    }
  }

  addHandlerRender(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
}

export default new PaginationView();
