import { NavLink } from 'react-router-dom'
import Pdf from './Pdf'
import { PDFViewer , PDFDownloadLink } from '@react-pdf/renderer'
import { useEffect, useState } from 'react'
import { getElement, getElements, getHeaders, getResults } from '../ops';

export default function PdfView() {
	const [isRendered , setIsRendered]  = useState(false);
	useEffect(() =>{
		setIsRendered(true);
	} , [])
  return (
      <div className='flex flex-column justify-evenly items-center m-10'>
        <NavLink to="/" className="p-10 bg-aqua hover:bg-slate-400 h-fit rounded-full">
          <h3>الرجوع</h3>
        </NavLink>
     {  isRendered ?  <PDFDownloadLink document={
          <Pdf 
            headerNodes={{headers : getHeaders() , elements : getElements() , results : getResults()}}
          />
        } fileName="resume.pdf">
          {({ blob, url, loading, error }) => (loading ? 'loading......' : <div className="p-10 bg-aqua hover:bg-slate-400 h-fit rounded-full">تحميل الملف</div>)}
        </PDFDownloadLink> : ""}
      </div>
  )
}
