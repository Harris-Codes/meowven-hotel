interface AddCatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddCatModal({ isOpen, onClose }: AddCatModalProps) {
  // If the parent says 'isOpen' is false, we don't show anything!
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold text-orange-600 mb-2">Add New Cat</h2>
        <p className="text-stone-600 mb-6">
          Fill in the details for your new cat.
        </p>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Cat Name
            </label>
            <input
              type="text"
              placeholder="Enter cat's name"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Please upload your cat photo
            </label>
            <label
              htmlFor="file-upload"
              className="group relative flex flex-col items-center justify-center w-full h-30 border-2 border-dashed border-stone-300 rounded-xl cursor-pointer hover:border-orange-500 transition-colors"
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <i className="fi fi-bs-cloud-upload text-3xl text-stone-400 group-hover:text-orange-600 transition-colors mb-2"></i>
                <p className="text-sm text-stone-500 group-hover:text-stone-600">
                  <span className="font-bold text-orange-600">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  PNG OR JPG (max.5MB)
                </p>
              </div>

              {/* THE HIDDEN INPUT */}
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => console.log(e.target.files?.[0])}
              />
            </label>
          </div>
        </form>
        <button
          onClick={() => onClose()}
          className="mt-8 w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
        >
          Close Modal
        </button>
      </div>
    </div>
  );
}
