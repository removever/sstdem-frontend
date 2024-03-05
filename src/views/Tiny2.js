import React, { useEffect, useRef, useState } from 'react'
import { tinyAPI } from '../api'

export default function Tiny2() {
  const editorRef = useRef(null);
  const [tiny_elements, setTinyElements] = useState({
    html: 'TEST'
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    console.log("fetchData")
    try {
      const data = await tinyAPI.getTinys()
      setTinyElements(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: tiny_elements.html }}>

    </div>
  );
}