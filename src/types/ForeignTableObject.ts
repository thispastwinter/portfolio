import { AnyObject } from "./AnyObject"

export type ForeignTableObject<Data extends AnyObject, ForeignTable> = {
  foreignTable: ForeignTable
  fields: Array<
    Data[ForeignTable] extends Array<infer Item>
      ? keyof Item
      : keyof Data[ForeignTable]
  >
}
