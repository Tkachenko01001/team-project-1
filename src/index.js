// MODAL RESERVE
(() => {
  const refs = {
    openModalTableBtn: document.querySelector('[data-modal-table-open]'),
    closeModalTableBtn: document.querySelector('[data-modal-table-close]'),
    modalTable: document.querySelector('[data-modal-table]'),
  };

  refs.openModalTableBtn.addEventListener('click', toggleModalTable);
  refs.closeModalTableBtn.addEventListener('click', toggleModalTable);

  function toggleModalTable() {
    refs.modalTable.classList.toggle('visually-hidden');
  }
})();

// MODAL RESERVE 2
(() => {
  const refs = {
    openModalTableBtn: document.querySelector(
      '[data-modal-table-open__restaurant-mainpage]'
    ),
    modalTable: document.querySelector('[data-modal-table]'),
  };

  refs.openModalTableBtn.addEventListener('click', toggleModalTable);
  refs.closeModalTableBtn.addEventListener('click', toggleModalTable);

  function toggleModalTable() {
    refs.modalTable.classList.toggle('visually-hidden');
  }
})();
