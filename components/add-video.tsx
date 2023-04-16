import { VideosContext } from "@/state/videos";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";

export default function AddVideo() {
  const { addVideo } = useContext(VideosContext);

  const [isOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = async () => {
    await addVideo({ title, description, likes: 0 });
    setIsOpen(false);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="my-4">
      <button className="border p-4 rounded-xl" onClick={openModal}>
        Add Video
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full bg-black max-w-lg transform overflow-hidden rounded-2xl border p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-100"
                  >
                    Add new video
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="grid grid-cols-10 gap-4 py-4">
                      <div className="col-span-2">Title</div>
                      <div className="col-span-8">
                        <input
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="border p-2 rounded-md w-full text-black"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-10 gap-4 my-4">
                      <div className="col-span-2">Description</div>
                      <div className="col-span-8">
                        <input
                          type="text"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="border p-2 rounded-md w-full text-black"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      onClick={submit}
                    >
                      Add new video
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
