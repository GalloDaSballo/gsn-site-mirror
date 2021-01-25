import React from 'react'
import { web3 } from 'entreprenerd-dapp-core'

export function ConnectWallet() {
  return (
    <button onClick={() => web3.askEthereumPermissions()}>
      Connect Wallet
    </button>
  )
}