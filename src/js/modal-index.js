  // MODAL TABLE RESERVE
  (() => {
      const refs = {
        openModalTableBtn: document.querySelector("[data-modal-table-open]"),
        closeModalTableBtn: document.querySelector("[data-modal-table-close]"),
        modalTable: document.querySelector("[data-modal-table]"),
      };
    
      refs.openModalTableBtn.addEventListener("click", toggleModalTable);
      refs.closeModalTableBtn.addEventListener("click", toggleModalTable);
    
      function toggleModalTable() {
          refs.modalTable.classList.toggle("visually-hidden");
      }
    })();
  
  // MODAL TABLE RESERVE 2
  (() => {
    const refs = {
      openModalTableBtn: document.querySelector("[data-modal-table-open__restaurant-mainpage]"),
      modalTable: document.querySelector("[data-modal-table]"),
    };
  
    refs.openModalTableBtn.addEventListener("click", toggleModalTable);
  
    function toggleModalTable() {
        refs.modalTable.classList.toggle("visually-hidden");
    }
  })();

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

    // MODAL ROOM RESERVE 2
    (() => {
      const refs = {
        openModalRoomBtn: document.querySelector("[data-modal-room-open__mainpage-hotel]"),
        modalRoom: document.querySelector("[data-modal-room]"),
      };
    
      refs.openModalRoomBtn.addEventListener("click", toggleModalRoom);
    
      function toggleModalRoom() {
          refs.modalRoom.classList.toggle("visually-hidden");
      }
    })();