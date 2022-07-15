import { ErrorMessage } from "../constants/ErrorMessage"
import { CustomErrorObject } from "../types/CustomErrorObject"

type CreateErrorArgs = {
  dataType: string
  status: number
  metaData?: CustomErrorObject["metaData"]
}

interface CustomErrorService {
  createError: (args: CreateErrorArgs) => CustomErrorObject
}

const errorHandler = ({ dataType, status, metaData }: CustomErrorObject) => {
  let error = {} as CustomErrorObject

  const metaDataObject = { ...metaData, stack: new Error().stack }

  if (status === 404 || status === 406 || status === 400) {
    error = {
      message: ErrorMessage[status](dataType),
      status,
      dataType,
      metaData: metaDataObject,
    }
  } else if (status === 500) {
    error = {
      message: ErrorMessage[status],
      status: status,
      dataType,
      metaData: metaDataObject,
    }
  } else {
    error = { message: ErrorMessage[418], status: 418, dataType, metaData }
  }

  return error
}

const createError: CustomErrorService["createError"] = ({
  dataType,
  status,
  metaData,
}) => errorHandler({ dataType, status, metaData })

export const ErrorService: CustomErrorService = {
  createError,
}
