FRONT-END DEPLOYMENT
App is accesible at the following URL:

https://faucet-react-solidity.surge.sh/

MIGRATION DETAILS

Compiling your contracts...
===========================
> Compiling .\contracts\FaucetContract.sol
> Compiling .\contracts\IFaucet.sol
> Compiling .\contracts\Logger.sol
> Compiling .\contracts\Migrations.sol
> Compiling .\contracts\Owned.sol
> Compiling .\contracts\Storage.sol
> Artifacts written to C:\Users\jaime\Desktop\blockchain\faucet-course-main\public\contracts
> Compiled successfully using:
   - solc: 0.8.4+commit.c7e474f2.Emscripten.clang



Starting migrations...
======================
> Network name:    'goerli'
> Network id:      5
> Block gas limit: 29999915 (0x1c9c32b)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x20bff21889cc4dea43526e856d67e0592afe223352479fbef6286d9233a46b0e
   > Blocks: 1            Seconds: 10
   > contract address:    0xd528203924e4AA924cf61B6F310B824d342B7bf2
   > block number:        7063039
   > block timestamp:     1655289673
   > account:             0x92976F8F045ec3C393d1CAb9a19218aC4F7EC084
   > balance:             0.047068702867479355
   > gas used:            248192 (0x3c980)
   > gas price:           1.788956215 gwei
   > value sent:          0 ETH
   > total cost:          0.00044400462091328 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 7063040)
   > confirmation number: 2 (block: 7063041)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.00044400462091328 ETH


2_faucet_migration.js
=====================

   Replacing 'Faucet'
   ------------------
   > transaction hash:    0xac4f15dde2732d78cdb8bd977e4a76bbf9add9552691f0a37490c253db8f3c2e
   > Blocks: 1            Seconds: 8
   > contract address:    0x80b9d7c506a5dbE1DE0ae24F642A6987b2620A5D
   > block number:        7063043
   > block timestamp:     1655289733
   > account:             0x92976F8F045ec3C393d1CAb9a19218aC4F7EC084
   > balance:             0.04698656652078006
   > gas used:            724563 (0xb0e53)
   > gas price:           1.788956215 gwei
   > value sent:          0 ETH
   > total cost:          0.001296211482009045 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 7063044)
   > confirmation number: 2 (block: 7063045)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.001296211482009045 ETH


3_storage_migration.js
======================

   Replacing 'Storage'
   -------------------
   > transaction hash:    0xd7bdcc23505c638ae1ce8952e09b6d94e9a19523f9efba24fa4593e391409902
   > Blocks: 1            Seconds: 13
   > contract address:    0x3413cB1Ab58AE498e900f902EaC6628562da3a10
   > block number:        7063047
   > block timestamp:     1655289793
   > account:             0x92976F8F045ec3C393d1CAb9a19218aC4F7EC084
   > balance:             0.044598114977527625
   > gas used:            581733 (0x8e065)
   > gas price:           1.788956215 gwei
   > value sent:          0 ETH
   > total cost:          0.001040694865820595 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 7063048)
   > confirmation number: 2 (block: 7063049)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.001040694865820595 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.00278091096874292 ETH
