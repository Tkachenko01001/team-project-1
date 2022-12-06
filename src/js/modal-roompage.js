  // MODAL ROOM RESERVE
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

      // MODAL ROOM PRICE 3
      (() => {
        const refs = {
          openModalPriceBtn: document.querySelector("[data-modal-price-open__roompage]"),
          closeModalPriceBtn: document.querySelector("[data-modal-price-close]"),
          modalPrice: document.querySelector("[data-modal-price]"),
        };
      
        refs.openModalPriceBtn.addEventListener("click", toggleModalPrice);
        refs.closeModalPriceBtn.addEventListener("click", toggleModalPrice);
      
        function toggleModalPrice() {
            refs.modalPrice.classList.toggle("visually-hidden");
        }
      })();