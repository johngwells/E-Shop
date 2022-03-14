const SignIn = () => {
  return (
    <>
      <div class=''>
        <button
          type='button'
          class='inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
          data-bs-toggle='modal'
          data-bs-target='#exampleModalCenter'
        >
          Vertically centered modal
        </button>
        <button
          type='button'
          class='inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
          data-bs-toggle='modal'
          data-bs-target='#exampleModalCenteredScrollable'
        >
          Vertically centered scrollable modal
        </button>
      </div>

      <div
        class='fade modal fixed top-0 left-0 hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none'
        id='exampleModalCenter'
        tabindex='-1'
        aria-labelledby='exampleModalCenterTitle'
        aria-modal='true'
        role='dialog'
      >
        <div class='modal-dialog modal-dialog-centered pointer-events-none relative w-auto'>
          <div class='modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none'>
            <div class='modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4'>
              <h5
                class='text-xl font-medium leading-normal text-gray-800'
                id='exampleModalScrollableLabel'
              >
                Modal title
              </h5>
              <button
                type='button'
                class='btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body relative p-4'>
              <p>This is a vertically centered modal.</p>
            </div>
            <div class='modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4'>
              <button
                type='button'
                class='inline-block rounded bg-purple-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button
                type='button'
                class='ml-1 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class='fade modal fixed top-0 left-0 hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none'
        id='exampleModalCenteredScrollable'
        tabindex='-1'
        aria-labelledby='exampleModalCenteredScrollable'
        aria-modal='true'
        role='dialog'
      >
        <div class='modal-dialog modal-dialog-centered modal-dialog-scrollable pointer-events-none relative w-auto'>
          <div class='modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none'>
            <div class='modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4'>
              <h5
                class='text-xl font-medium leading-normal text-gray-800'
                id='exampleModalCenteredScrollableLabel'
              >
                Modal title
              </h5>
              <button
                type='button'
                class='btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body relative p-4'>
              <p>
                This is some placeholder content to show a vertically centered
                modal. We've added some extra copy here to show how vertically
                centering the modal works when combined with scrollable modals.
                We also use some repeated line breaks to quickly extend the
                height of the content, thereby triggering the scrolling. When
                content becomes longer than the predefined max-height of modal,
                content will be cropped and scrollable within the modal.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p>Just like that.</p>
            </div>
            <div class='modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4'>
              <button
                type='button'
                class='inline-block rounded bg-purple-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button
                type='button'
                class='ml-1 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
