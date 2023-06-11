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
}

export async function ExecuteAsync<T>(
  func: (onFailure: (message: string) => void) => Promise<T>
): Promise<AOResult<T>> {
  const result = new AOResult<T>();

  let isOnFailureExecuted = false;

  const onFailure = (message: string) => {
    isOnFailureExecuted = true;
    result.setFailure(message);
  };

  try {
    const taskResult = await func(onFailure);

    if (!isOnFailureExecuted) {
      result.setSuccess(taskResult);
    }
  } catch (ex: any) {
    result.setException(ex);
  }

  return result;
}
