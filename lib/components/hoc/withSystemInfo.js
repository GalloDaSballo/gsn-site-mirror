import { graphql } from 'react-apollo'
import { queries } from 'entreprenerd-dapp-core'

export function withSystemInfoQuery (Component) {
  return graphql(queries.systemInfoQuery, { name: 'systemInfoQuery' })(Component)
}
