import { AnyObject } from "./AnyObject"
import { ListItem } from "./ListItem"

export type ForeignTableObject<Data extends AnyObject, ForeignTable> = {
  foreignTable: ForeignTable
  fields: Array<keyof ListItem<Data[ForeignTable]>>
}
