export interface IFeedEntry {
  __typename: 'GameFeedEntry' | 'PostFeedEntry'
}

export * from './generated'
export {default as ApiProvider} from './ApiProvider'
