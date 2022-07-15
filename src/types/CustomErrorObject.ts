export interface CustomErrorObject {
  dataType: string
  status: number
  message?: string
  metaData?: Record<string, unknown>
}
