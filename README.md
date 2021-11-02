# SuperRare - V1 Subgraph

## Abstract

This subgraph was commissioned to track SuperRare v1 Artworks and their respective Bids, Sales and Transfers.

The entities are as such - 

**Artwork** - Which tracks the tokens and the frames minted from the original token. 

**Accounts** - User Accounts

**BidLogs** - Bids for Artworks, that resolved and are set to Accepted or Cancelled (isAccepted Flag)

**SaleLog** - Tracks the Sales of Artworks and the respective amount & buyer address.

*Artworks are related to Sales, Bids and Accounts.*

## Setup 

To Install Run - `npm i`

To Run Code Generation - `npm run codgegen`

1. Please setup a new subgraph before attempting to deploy - https://thegraph.com/hosted-service/dashboard

2. Skip to the last instruction called Deploy in the setup steps - run these at the 'To Deploy' step below on the first time deploying.

To Deploy - `npm run deploy` or first time deploy commands from points above.

Please make sure your subgraph is authed and setup correctly in the package.json - currently it will deploy to *ptomelysoter/superrarev1*. This should be changed



