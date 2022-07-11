import { ForeignTableObject } from "./ForeignTableObject"

export type QueryFields<Data, ForeignTable1, ForeignTable2, ForeignTable3> =
  Array<
    | keyof Data
    | ForeignTableObject<Data, ForeignTable1>
    | ForeignTableObject<Data, ForeignTable2>
    | ForeignTableObject<Data, ForeignTable3>
  >
