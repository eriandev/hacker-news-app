export interface APINewsResponse {
  exhaustive: Exhaustive
  exhaustiveNbHits: boolean
  exhaustiveTypo: boolean
  hits: Hit[]
  hitsPerPage: number
  nbHits: number
  nbPages: number
  page: number
  params: string
  processingTimeMS: number
  processingTimingsMS: ProcessingTimingsMS
  query: string
  serverTimeMS: number
}

export interface News {
  id: string
  author: string
  link?: string
  title: string
  timestamp: number
}

interface Exhaustive {
  nbHits: boolean
  typo: boolean
}

interface Hit {
  _highlightResult: HighlightResult
  _tags: string[]
  author: string
  comment_text: string
  created_at: Date
  created_at_i: number
  objectID: string
  parent_id: number
  story_id: number
  story_title: string
  story_url?: string
  updated_at: Date
}

interface HighlightResult {
  author: Author
  comment_text: Author
  story_title: Author
  story_url: Author
}

interface Author {
  matchLevel: string
  matchedWords: string[]
  value: string
  fullyHighlighted?: boolean
}

interface ProcessingTimingsMS {
  _request: Request
  afterFetch: AfterFetch
  fetch: Fetch
  total: number
}

interface Request {
  roundTrip: number
}

interface AfterFetch {
  format: Format
  merge: Merge
  total: number
}

interface Format {
  highlighting: number
  total: number
}

interface Merge {
  total: number
}

interface Fetch {
  query: number
  total: number
}
