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