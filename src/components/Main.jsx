import { headers, elements, results } from '../assets'
import {
  getHeaders,
  getElements,
  getResults,
  getElement,
  setHeaders,
  setElements,
  setResults
} from '../ops'
import ReactPDF from '@react-pdf/renderer'

import Element from './Element'
import { useNavigate } from 'react-router'
import Pdf from './Pdf'

export default function Main() {
  const navigate = useNavigate()

  const headersStart = 0,
    headersEnd = headers.length
  const elementsStart = headersEnd,
    elementsEnd = headersEnd + elements.length

  if (!getHeaders()) setHeaders(headers.map(x => [x, '']))
  if (!getElements()) setElements(elements.map(x => [x, 0]))
  if (!getResults()) setResults(0)
  const initializeContract = async e => {
    setHeaders(headers.map(x => [x, '']))
    setElements(elements.map(x => [x, 0]))
    setResults(0);
    window.location.reload()
  }
  const renderInput = type => {
    return (input, i) => {
      return (
        <Element
          key={type + input}
          name={input}
          type={type}
          value={type !== 'results' && getElement(type, i)[1]}
        />
      )
    }
  }
  const handleSubmit = async e => {
    e.preventDefault()
    const formDataEntries = new FormData(e.currentTarget).entries()
    const data = Object.fromEntries(formDataEntries)
    const values = Object.entries(data)
    const headersEntries = values.slice(headersStart, headersEnd),
      elementsEntries = values.slice(elementsStart, elementsEnd)
    let result = 0
    for (let i = 0; i < elementsEntries.length; i++) {
      if (!elementsEntries[i][1]) elementsEntries[i][1] = 0
      elementsEntries[i][1] = Number(elementsEntries[i][1])
      result += elementsEntries[i][1]
    }
    setHeaders(headersEntries)
    setElements(elementsEntries)
    setResults(result)
    navigate('pdf');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button
        type="button"
        onClick={initializeContract}
        className="flex flex-column items-center justify-center p-5 w-full hover:bg-slate-500"
      >
        <h4>بدأ كشف حساب جديد</h4>
      </button>
      <div className="flex flex-row justify-center items-center flex-wrap gap-10 bg-indigo-700">
        <div className="flex flex-column items-center w-full justify-center bg-indigo-600">
          <h2>معلومات الشركة</h2>
        </div>
        {headers.map(renderInput('headers'))}
      </div>

      <div className="flex flex-row justify-center items-center flex-wrap gap-10 bg-indigo-700">
        <div className="flex flex-column items-center w-full justify-center bg-indigo-600">
          <h2>المدفوعات</h2>
        </div>
        {elements.map(renderInput('elements'))}
      </div>

      <div className="flex flex-row justify-center items-center flex-wrap gap-10 bg-indigo-700">
        <div className="flex flex-column items-center w-full justify-center bg-indigo-600">
          <h2>الاجمالى</h2>
        </div>
        {results.map(renderInput('results'))}
      </div>
      <button
        className="flex flex-column items-center justify-center p-5 w-full hover:bg-slate-500"
        type="submit"
      >
        <h3>نشر PDF</h3>
      </button>
    </form>
  )
}
