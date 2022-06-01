import { useMemo } from 'react'
import axios from 'axios'
export default () => useMemo(() => {
  const abortController = new AbortController()
  const api = axios.create({
    baseUrl: 'http://localhost:3001',
    signal: abortController.signal
  })
  api.defaults.baseURL = 'http://localhost:3001'
  return [api, abortController]
}, [])