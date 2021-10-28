import { BigInt } from "@graphprotocol/graph-ts"
import { Contract, SalePriceSet } from "../generated/Contract/Contract"
import { Token } from "../generated/schema"

export function handleSalePriceSet(event: SalePriceSet): void {

  let entity = Token.load(event.params._tokenId.toHex())

  let contract = Contract.bind(event.address);

  if (entity == null) {
    entity = new Token(event.params._tokenId.toHex())

    
  }
  //entity.blockTime = event.block.number;
  entity.uri = contract.tokenURI(event.params._tokenId);
  entity.owner = contract.ownerOf(event.params._tokenId);
  entity.creator = contract.creatorOfToken(event.params._tokenId);
  entity.blockTime = event.block.timestamp;
  entity.price = event.params._price;
 
  entity.save()
}