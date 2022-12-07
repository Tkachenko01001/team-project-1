// MODAL ROOM RESERVE 2
(() => {
    const refs = {
      openModalRoomBtn: document.querySelector("[data-modal-room-open]"),
      closeModalRoomBtn: document.querySelector("[data-modal-room-close]"),
      modalRoom: document.querySelector("[data-modal-room]"),
    };
  
    refs.openModalRoomBtn.addEventListener("click", toggleModalRoom);
    refs.closeModalRoomBtn.addEventListener("click", toggleModalRoom);
  
    function toggleModalRoom() {
        refs.modalRoom.classList.toggle("visually-hidden");
    }
  })();

  // MODAL ROOM PRICE
(() => {
  const refs = {
    openModalPriceBtn: document.querySelector("[data-modal-price-open]"),
    closeModalPriceBtn: document.querySelector("[data-modal-price-close]"),
    modalPrice: document.querySelector("[data-modal-price]"),
  };

  refs.openModalPriceBtn.addEventListener("click", toggleModalPrice);
  refs.closeModalPriceBtn.addEventListener("click", toggleModalPrice);

  function toggleModalPrice() {
      refs.modalPrice.classList.toggle("visually-hidden");
  }
})();

  // MODAL ROOM PRICE 2
  (() => {
    const refs = {
      openModalPriceBtn: document.querySelector("[data-modal-price-open__hotelpage_double_lux]"),
      modalPrice: document.querySelector("[data-modal-price]"),
    };
  
    refs.openModalPriceBtn.addEventListener("click", toggleModalPrice);
  
    function toggleModalPrice() {
        refs.modalPrice.classList.toggle("visually-hidden");
    }
  })();

    // MODAL ROOM PRICE 3
    (() => {
      const refs = {
        openModalPriceBtn: document.querySelector("[data-modal-price-open__hotelpage_triple]"),
        modalPrice: document.querySelector("[data-modal-price]"),
      };
    
      refs.openModalPriceBtn.addEventListener("click", toggleModalPrice);
    
      function toggleModalPrice() {
          refs.modalPrice.classList.toggle("visually-hidden");
      }
    })();

    // MODAL ROOM PRICE 4
    (() => {
      const refs = {
        openModalPriceBtn: document.querySelector("[data-modal-price-open__hotelpage_double]"),
        modalPrice: document.querySelector("[data-modal-price]"),
      };
    
      refs.openModalPriceBtn.addEventListener("click", toggleModalPrice);
    
      function toggleModalPrice() {
          refs.modalPrice.classList.toggle("visually-hidden");
      }
    })();