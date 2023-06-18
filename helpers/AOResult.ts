import { ERRORS } from "../constants/errors";

export class AOResult<T> {
  public isSuccess: boolean = false;
  public result?: T;
  public exception?: any;
  public message?: string;

  public setSuccess(result: T) {
    this.isSuccess = true;
    this.result = result;
  }

  public setFailure(message: string) {
    this.isSuccess = false;
    this.message = message;
  }

  public setException(exception: any) {
    this.isSuccess = false;
    this.exception = exception;
  }

  public getErrorDescription(): string {
    return this.exception?.message ?? this.message ?? ERRORS.someErrorOccurred;
  }
}

export type FailureCallback = (message: string) => void;
type AsyncFunc<T> = (onFailure: FailureCallback) => Promise<T>;

export async function ExecuteAsync<T>(
  func: AsyncFunc<T>
): Promise<AOResult<T>> {
  const result = new AOResult<T>();

  let isOnFailureExecuted: boolean = false;

  const onFailure = (message: string): void => {
    isOnFailureExecuted = true;
    result.setFailure(message);
  };

  try {
    const funcResult = await func(onFailure);

    if (!isOnFailureExecuted) {
      result.setSuccess(funcResult);
    }
  } catch (ex: any) {
    result.setException(ex);
  }

  return result;
}
