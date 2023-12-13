const NFT_CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'artist_',
        type: 'address'
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string'
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string'
      },
      {
        internalType: 'string',
        name: '_contractURI',
        type: 'string'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [],
    name: 'ApprovalCallerNotOwnerNorApproved',
    type: 'error'
  },
  {
    inputs: [],
    name: 'ApprovalQueryForNonexistentToken',
    type: 'error'
  },
  {
    inputs: [],
    name: 'BalanceQueryForZeroAddress',
    type: 'error'
  },
  {
    inputs: [],
    name: 'MintERC2309QuantityExceedsLimit',
    type: 'error'
  },
  {
    inputs: [],
    name: 'MintToZeroAddress',
    type: 'error'
  },
  {
    inputs: [],
    name: 'MintZeroQuantity',
    type: 'error'
  },
  {
    inputs: [],
    name: 'OwnerQueryForNonexistentToken',
    type: 'error'
  },
  {
    inputs: [],
    name: 'OwnershipNotInitializedForExtraData',
    type: 'error'
  },
  {
    inputs: [],
    name: 'TransferCallerNotOwnerNorApproved',
    type: 'error'
  },
  {
    inputs: [],
    name: 'TransferFromIncorrectOwner',
    type: 'error'
  },
  {
    inputs: [],
    name: 'TransferToNonERC721ReceiverImplementer',
    type: 'error'
  },
  {
    inputs: [],
    name: 'TransferToZeroAddress',
    type: 'error'
  },
  {
    inputs: [],
    name: 'URIQueryForNonexistentToken',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'Approval',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool'
      }
    ],
    name: 'ApprovalForAll',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'fromTokenId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'toTokenId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address'
      }
    ],
    name: 'ConsecutiveTransfer',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'Transfer',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address'
      }
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'contractURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newAmount',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'auction_',
        type: 'address'
      }
    ],
    name: 'createNewSeason',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'auction_',
        type: 'address'
      }
    ],
    name: 'createToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'getLocked',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address'
      }
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'unlocker',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }
    ],
    name: 'lock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_salePrice',
        type: 'uint256'
      }
    ],
    name: 'royaltyInfo',
    outputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'royaltyAmount',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes'
      }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address'
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool'
      }
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'newBaseTokenUri_',
        type: 'string'
      }
    ],
    name: 'setBaseTokenUri',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'newBaseTokenUriExt_',
        type: 'string'
      }
    ],
    name: 'setBaseTokenUriExt',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_contractURI',
        type: 'string'
      }
    ],
    name: 'setContractURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4'
      }
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256'
      }
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }
    ],
    name: 'unlock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]

const FACTORY_CONTRACT_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'auctionAddress',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'campaignID',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'auctionStartTime',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'auctionEndTime',
        type: 'uint256'
      }
    ],
    name: 'contractsCreated',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'contract EcosystemTreasure',
        name: 'ecosystemContract',
        type: 'address'
      },
      { internalType: 'string', name: 'name', type: 'string' },
      { internalType: 'string', name: 'symbol', type: 'string' },
      { internalType: 'string', name: 'campaignID_', type: 'string' },
      { internalType: 'string', name: '_contractURI', type: 'string' },
      {
        components: [
          { internalType: 'uint256', name: 'minBidAmount', type: 'uint256' },
          { internalType: 'uint16', name: 'seasonNFTs', type: 'uint16' },
          { internalType: 'uint256', name: 'auctionStart', type: 'uint256' },
          { internalType: 'uint256', name: 'auctionEnd', type: 'uint256' },
          { internalType: 'uint8', name: 'contributorsPercent', type: 'uint8' },
          { internalType: 'address', name: 'operator', type: 'address' },
          { internalType: 'address', name: 'projectWallet', type: 'address' }
        ],
        internalType: 'struct Auction.SeasonSetting',
        name: 'seasonData',
        type: 'tuple'
      }
    ],
    name: 'createNewCampaign',
    outputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'string', name: '', type: 'string' }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'routerContract',
    outputs: [{ internalType: 'contract Router', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  }
]

const AUCTION_CONTRACT_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address'
      }
    ],
    name: 'AdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newTime',
        type: 'uint256'
      }
    ],
    name: 'AuctionTimeChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'beacon',
        type: 'address'
      }
    ],
    name: 'BeaconUpgraded',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'bidder',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'ethAmount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'auctionId',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'auctionEnd',
        type: 'uint256'
      },
      { indexed: false, internalType: 'string', name: 'bidId', type: 'string' }
    ],
    name: 'BidIncreased',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'bidder',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'ethAmount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'auctionId',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'auctionEnd',
        type: 'uint256'
      },
      { indexed: false, internalType: 'string', name: 'bidId', type: 'string' }
    ],
    name: 'BidMade',
    type: 'event'
  },
  { anonymous: false, inputs: [], name: 'ClaimSucceeded', type: 'event' },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint8', name: 'version', type: 'uint8' }
    ],
    name: 'Initialized',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address'
      }
    ],
    name: 'Upgraded',
    type: 'event'
  },
  {
    inputs: [],
    name: 'GenesisPassContract',
    outputs: [
      { internalType: 'contract ReopenGenesisPass', name: '', type: 'address' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    name: 'NFTWinnersData',
    outputs: [
      { internalType: 'address', name: 'bidder', type: 'address' },
      { internalType: 'uint256', name: 'ethAmount', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'Season',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'SeasonDataMapping',
    outputs: [
      { internalType: 'uint256', name: 'minBidAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'lastTokenId', type: 'uint256' },
      { internalType: 'uint256', name: 'bidCount', type: 'uint256' },
      { internalType: 'uint16', name: 'seasonNFTs', type: 'uint16' },
      { internalType: 'uint256', name: 'auctionStart', type: 'uint256' },
      { internalType: 'uint256', name: 'auctionEnd', type: 'uint256' },
      { internalType: 'uint8', name: 'auctionState', type: 'uint8' },
      { internalType: 'uint256', name: 'raisedFunds', type: 'uint256' },
      { internalType: 'uint8', name: 'contributorsPercent', type: 'uint8' },
      { internalType: 'uint8', name: 'projectPercent', type: 'uint8' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    name: 'bidsMapping',
    outputs: [
      { internalType: 'address', name: 'bidder', type: 'address' },
      { internalType: 'uint256', name: 'ethAmount', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'bidNumber_', type: 'uint256' },
      { internalType: 'address', name: 'bidderAddress_', type: 'address' }
    ],
    name: 'cancelBid',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'checkAuctionState',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'minBidAmount_', type: 'uint256' },
      { internalType: 'uint16', name: 'seasonNFTs_', type: 'uint16' },
      { internalType: 'uint256', name: 'auctionStart_', type: 'uint256' },
      { internalType: 'uint256', name: 'auctionEnd_', type: 'uint256' }
    ],
    name: 'createNewSeason',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'ecosystemContract',
    outputs: [
      { internalType: 'contract EcosystemTreasure', name: '', type: 'address' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string', name: 'auctionId', type: 'string' },
      { internalType: 'uint256', name: 'bidValue', type: 'uint256' },
      { internalType: 'string', name: 'bidId', type: 'string' }
    ],
    name: 'increaseBid',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'contract NFT', name: 'nft_', type: 'address' },
      { internalType: 'contract Router', name: 'router_', type: 'address' },
      {
        components: [
          { internalType: 'uint256', name: 'minBidAmount', type: 'uint256' },
          { internalType: 'uint16', name: 'seasonNFTs', type: 'uint16' },
          { internalType: 'uint256', name: 'auctionStart', type: 'uint256' },
          { internalType: 'uint256', name: 'auctionEnd', type: 'uint256' },
          { internalType: 'uint8', name: 'contributorsPercent', type: 'uint8' },
          { internalType: 'address', name: 'operator', type: 'address' },
          { internalType: 'address', name: 'projectWallet', type: 'address' }
        ],
        internalType: 'struct Auction.SeasonSetting',
        name: 'seasonData',
        type: 'tuple'
      },
      {
        internalType: 'contract EcosystemTreasure',
        name: 'ecosystem',
        type: 'address'
      }
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'nft',
    outputs: [{ internalType: 'contract NFT', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'operator',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string', name: 'auctionId', type: 'string' },
      { internalType: 'string', name: 'bidId', type: 'string' },
      { internalType: 'uint256', name: 'bidValue', type: 'uint256' }
    ],
    name: 'placeBid',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'projectWallet',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'reopen',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'returnMoneytoNonWinners',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'routerContract',
    outputs: [{ internalType: 'contract Router', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'royaltyRouter',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'selectWinners',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'season_', type: 'uint256' }],
    name: 'snapshot',
    outputs: [
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'address[]', name: '', type: 'address[]' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'bidder', type: 'address' },
          { internalType: 'uint256', name: 'ethAmount', type: 'uint256' }
        ],
        internalType: 'struct Auction.Bid[]',
        name: 'newDatas',
        type: 'tuple[]'
      }
    ],
    name: 'sortWinners',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'bidder', type: 'address' },
          { internalType: 'uint256', name: 'ethAmount', type: 'uint256' }
        ],
        internalType: 'struct Auction.Bid[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'season_', type: 'uint256' }],
    name: 'throwSeasonData',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'bidder', type: 'address' },
          { internalType: 'uint256', name: 'ethAmount', type: 'uint256' }
        ],
        internalType: 'struct Auction.Bid[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'newImplementation', type: 'address' }
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'newImplementation', type: 'address' },
      { internalType: 'bytes', name: 'data', type: 'bytes' }
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'wethaddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  }
]


module.exports = { NFT_CONTRACT_ABI, AUCTION_CONTRACT_ABI }