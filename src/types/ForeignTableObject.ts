import { AnyObject } from "./AnyObject"
import { ListItem } from "./ListItem"

export type ForeignTableObject<Data extends AnyObject, ForeignTable> = {
  foreignTable: ForeignTable
  fields: Array<
    Data[ForeignTable] extends Array<unknown>
      ? keyof ListItem<Data[ForeignTable]>
      : keyof Data[ForeignTable]
  >
}
