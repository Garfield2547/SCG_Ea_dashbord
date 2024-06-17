import React from 'react'

const Im_P = () => {
  return (
    <div>
    <div className=' text-white text-center font-bold text-2xl h-10 p-1' style={{ backgroundColor: "#333333" }}>
        ประเด็นสำคัญ
    </div>
    <div className='m-8'>
        <span className='font-bold text-xl'> ข้อความ</span>
        <div className='mb-6 mt-3'>
        <textarea className="textarea textarea-bordered w-full font-bold" placeholder="กรอกข้อความที่นี้...."></textarea>
        </div>
        <span className='font-bold text-xl'>อัปโหลดรูปภาพ</span>
        <div >
        <label className="form-control w-full max-w-xs">
  <div className="label">
    
  </div>
  <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
  <div className="label">
  <span className="label-text">เลือกรูปภาพ</span>
  <span className="label-text-alt text-red-500">.PNG หรือ .JPG</span>
  </div>
</label>


        </div>
        <div>
        <button className="btn btn-outline btn-accent">บันทึก</button>
        </div>
    </div>
    
</div>
  )
}

export default Im_P