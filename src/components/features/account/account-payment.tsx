import { FaCcVisa, FaPlus, FaTrash } from 'react-icons/fa'

function PaymentTab() {
  return (
    <div>
      <div className="mb-4 text-2xl font-bold">Payment methods</div>

      <div className="flex items-center gap-6 rounded-xl bg-white p-6">
        <div className="relative h-48 w-80 rounded-2xl bg-[#92D5C6] p-6 text-black shadow-lg">
          {/* Nút xóa */}
          <button className="bg-opacity-20 absolute top-4 right-4 rounded bg-black p-1">
            <FaTrash className="text-black" />
          </button>

          {/* Số thẻ */}
          <div className="mb-8 text-2xl font-bold tracking-widest">
            **** **** ****
            <br />
            4321
          </div>

          {/* Valid thru + Logo Visa */}
          <div className="absolute right-6 bottom-4 left-6 flex items-end justify-between">
            <div>
              <p className="text-xs text-black/70">Valid Thru</p>
              <p className="text-lg font-bold">02/27</p>
            </div>
            <FaCcVisa className="text-3xl" />
          </div>
        </div>

        <div className="flex h-48 w-80 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#92D5C6] transition hover:bg-[#92d5c620]">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#92D5C6]">
            <FaPlus className="text-[#92D5C6]" />
          </div>
          <p className="text-sm text-gray-700">Add a new card</p>
        </div>
      </div>
    </div>
  )
}

export default PaymentTab
