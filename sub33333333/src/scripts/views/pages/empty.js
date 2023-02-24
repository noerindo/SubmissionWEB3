class EmptyFavoriteComponent extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
                  <h2 ">Favorite restaurant still empty</h2>
              
          `;
  }
}

customElements.define('empty-favorite', EmptyFavoriteComponent);
