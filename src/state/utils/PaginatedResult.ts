export type PaginatedResult<TResult> = {
  data: TResult
  continuationToken: string | null
}
